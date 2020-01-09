import React from 'react';

// Material UI Imports
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 900,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

 const PendingStory = props => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
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
          <Button variant="contained" color="primary">Accept</Button>
          <Button variant="contained" color="secondary">Deny</Button>
          </p>
        </div>
      </Modal>
    </div>
  );
}
        // <div className='pending-story'>
        //     <h3>{props.story.storyName}</h3>
        //     <p>{props.story.storyContent}</p>
        // </div>
export default PendingStory;