import React from "react";
import { connect } from "react-redux";
import {
  approveStory,
  denyStory,
  fetch_pending_stories,
  fetch_stories
} from "../utils/actions";

import {
  makeStyles,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogContentText as P,
  DialogActions,
  Button
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: 900,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  storyButton: {
    marginBottom: theme.spacing(1),
    fontSize: theme.spacing(2)
  },
  card: {
    maxWidth: "100%"
  },
  media: {
    height: 140
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
    <React.Fragment>
      {/* <Button
            className={classes.storyButton}
            fullWidth
            variant="outlined"
            onClick={handleOpen}
          >
            {props.story.storyName}
          </Button> */}
      <Card className={classes.card} onClick={handleOpen}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.story.storyName}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.story.storyContent.split(".")[0]}...
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll="paper"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">
          {props.story.storyName}
        </DialogTitle>
        <DialogContent dividers={true}>
          {props.story.storyContent.split("\n").map((p, i) => (
            <P key={i}>{p}</P>
          ))}
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              const updateStories = {
                ...props.story,
                approved: true
              };
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
              props.denyStory(props.story.id);
              handleClose();
            }}
          >
            Deny
          </Button>
        </DialogActions>
      </Dialog>

      {/* <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">{props.story.storyName}</h2>
          <p id="simple-modal-description">
            {props.story.storyContent.split("\n").map(p => (
              <p>{p}</p>
            ))}
            <br></br>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                const updateStories = {
                  ...props.story,
                  approved: true
                };
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
                props.denyStory(props.story.id);
                handleClose();
              }}
            >
              Deny
            </Button>
          </p>
        </div>
      </Modal>*/}
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    storyReducer: state.storyReducer
  };
};

export default connect(mapStateToProps, {
  approveStory,
  denyStory,
  fetch_stories,
  fetch_pending_stories
})(PendingStory);
