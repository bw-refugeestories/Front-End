import React, { useState } from "react";
import { connect } from "react-redux";
import { login, store_user_id } from "../utils/actions";
import axios from "axios";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const Login = props => {
  const classes = useStyles();

  const [user, setUser] = useState({ username: "", password: "" });
  const [isFailed, setIsFailed] = useState(false);

  const handleUpdate = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("https://refugees-lambda.herokuapp.com/auth/login", user)
      .then(res => {
        setIsFailed(false);
        let signedInUserId = null;

        props.users.forEach(currentUser => {
          if (currentUser.username === user.username) {
            signedInUserId = currentUser.id;
          }
        });
        props.store_user_id(signedInUserId);
        localStorage.setItem("token", res.data.token);
        props.login();
        props.history.push("/admin");
      })
      .catch(err => {
        console.error(err);
        setIsFailed(true);
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.blue}></Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            onChange={handleUpdate}
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            onChange={handleUpdate}
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
          />
          <Button
            type="submit"
            onClick={handleSubmit}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Login
          </Button>
          {!isFailed ? null : (
            <p className="failed">Login failed. Please try again!</p>
          )}
        </form>
      </div>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    users: state.users,
    loggedInUserId: state.loggedInUserId
  };
};

export default connect(mapStateToProps, { login, store_user_id })(Login);
