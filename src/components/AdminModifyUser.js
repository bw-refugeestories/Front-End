import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';
import {modify_admin_user} from '../utils/actions';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const AdminModifyUser = props => {
  const classes = useStyles();
  const { loggedInUserId, users, modify_admin_user } = props;

  const [user, setUser] = useState({firstName: '', lastName: '', username: '', password: ''});

  useEffect(() => {
    let loggedInUser = users.filter(user => user.id === loggedInUserId);
    loggedInUser = loggedInUser[0];
    if(loggedInUser) {setUser({...user, firstName: loggedInUser.firstName, lastName: loggedInUser.lastName, username: loggedInUser.username})};
  }, []);

  const handleUpdate = e => {
    const {name, value} = e.target;
    setUser({...user, [name]: value});
  }

  const handleSubmit = e => {
      e.preventDefault();
      user.id = loggedInUserId;
      modify_admin_user(user);
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.blue}>
        </Avatar>
        <Typography component="h1" variant="h5">
          Modify User
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
            value = {user.firstName}
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
            value = {user.lastName}
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
            value = {user.username}
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
            Update User
          </Button>
        </form>
      </div>
    </Container>
  );
}

const mapStateToProps = state => {
    return {
        users: state.users,
        loggedInUserId: state.loggedInUserId
    }
}

export default connect(mapStateToProps, {modify_admin_user})(AdminModifyUser);