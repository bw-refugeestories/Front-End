import React, { useState } from "react";
import { connect } from "react-redux";
import { add_admin_user } from "../utils/actions";
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

const AdminAddUser = props => {
  const classes = useStyles();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: ""
  });

  const handleUpdate = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(user);
    props.add_admin_user(user);
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.blue}></Avatar>
        <Typography component="h1" variant="h5">
          Add Admin User
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            onChange={handleUpdate}
            required
            fullWidth
            id="firstName"
            label="First Name"
            name="firstName"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            onChange={handleUpdate}
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
          />
          <TextField
            variant="outlined"
            margin="normal"
            onChange={handleUpdate}
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
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
            Add Admin
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default connect(null, { add_admin_user })(AdminAddUser);
