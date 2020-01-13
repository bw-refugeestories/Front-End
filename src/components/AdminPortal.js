import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { fetch_pending_stories } from "../utils/actions";
import PendingStory from "./PendingStory.js";

const AdminPortal = ({ pendingStories, fetch_pending_stories }) => {
  useEffect(() => {
    fetch_pending_stories();
  }, []);

  return (
    <div className="admin-portal">
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
      <Link to="/admin/delete-user">
        <Button variant="contained" color="primary">
          Delete a User
        </Button>
      </Link>
      <h2>Pending Stories</h2>
      <div className="pending-wrapper">
        {pendingStories.length > 0
          ? pendingStories.map(story => (
              <PendingStory story={story} key={story.id} storyId={story.id} />
            ))
          : "No pending stories."}
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
