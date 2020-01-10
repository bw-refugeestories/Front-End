import React from "react";
import { connect } from 'react-redux';
import { approveStory, denyStory, fetch_pending_stories, fetch_stories} from '../utils/actions';

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

const PendingStory = props => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        {props.story.storyName}
      </button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div className={classes.paper}>
          <h2 id="simple-modal-title">{props.story.storyName}</h2>
          <p id="simple-modal-description">
            {props.story.storyContent}
            <br></br>
            <Button 
            variant="contained" 
            color="primary"
            onClick={() => {
                const updateStories ={
                    ...props.story,
                    approved: true,
                }
                console.log(updateStories)
                props.approveStory(updateStories);
                handleClose();
            }}
            >
              Accept
            </Button>
            <Button 
            variant="contained" 
            color="secondary"
            onClick={() => {
                props.denyStory(props.story.id)
                handleClose();
            }}
            >
              Deny
            </Button>
          </p>
        </div>
      </Modal>
    </div>
  );
};

const mapStateToProps = state => {
    return {
        storyReducer: state.storyReducer
    }
}

export default connect (
    mapStateToProps, {
        approveStory,
        denyStory,
        fetch_stories,
        fetch_pending_stories
    }
) (PendingStory);
