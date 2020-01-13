import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { deleteUser } from '../utils/actions';

// Material UI Imports
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: 900,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

const UserInfo = props => {
  const classes = useStyles();
  const {user} = props;
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        {user.username}
      </Button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div className={classes.paper}>
          <h2 id="simple-modal-title">{user.username}</h2>
          <p id="simple-modal-description">
            First Name: {user.firstName}<br></br>
            Last Name: {user.lastName}<br></br><br></br>
            <Button 
            variant="contained" 
            color="primary"
            onClick={() => {
                props.deleteUser(user.id);
                handleClose();
            }}
            >
              Delete User
            </Button>
            <Button 
            variant="contained" 
            color="secondary"
            onClick={() => {
                handleClose();
            }}
            >
              Cancel
            </Button>
          </p>
        </div>
      </Modal>
    </div>
  );
};

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

export default connect (
    mapStateToProps, {
        deleteUser
    }
) (UserInfo);
