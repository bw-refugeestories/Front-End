import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetch_pending_stories } from "../utils/actions";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import PendingStory from "./PendingStory.js";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Card, CardActionArea, CardContent } from "@material-ui/core";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));
const AdminPortal = ({ pendingStories, fetch_pending_stories }) => {
  const classes = useStyles();

  useEffect(fetch_pending_stories, []);

  return (
    <div className="admin-portal">
      {/* <Link to="/admin/add-user">
        <Button variant="contained" color="primary">
          Add New Admin
        </Button>
      </Link>
      <Link to="/admin/modify-user">
        <Button variant="contained" color="primary">
          Modify User
        </Button>
      </Link>
      <h2>Pending Stories</h2> */}

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Pending Stories
          </Typography>
          <Link to="/admin/add-user">
            <Button variant="contained" color="primary">
              Add New Admin
            </Button>
          </Link>
          <Link to="/admin/modify-user">
            <Button variant="contained" color="primary">
              Modify User
            </Button>
          </Link>
        </Toolbar>
      </AppBar>

      <div className="pending-wrapper">
        {pendingStories.length > 0 ? (
          pendingStories.map(story => (
            <PendingStory story={story} key={story.id} storyId={story.id} />
          ))
        ) : (
          <Card className={classes.card}>
            <CardActionArea>
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  No pending stories.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    pendingStories: state.pendingStories,
    loggedInUserId: state.loggedInUserId
  };
};

export default connect(mapStateToProps, { fetch_pending_stories })(AdminPortal);
