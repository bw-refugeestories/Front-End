import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { fetch_pending_stories } from "../utils/actions";
import PendingStory from "./PendingStory.js";

const AdminPortal = props => {
  useEffect(() => {
    props.fetch_pending_stories();
  }, []);
  
  return (
    <div className="admin-portal">
      <Link to="/admin/add-user">
        <Button variant="contained" color="primary">
          Add New Admin
        </Button>
      </Link>
      <h1>Pending Stories</h1>
      <div className="pending-wrapper">
        {props.pendingStories.map(story => (
          <PendingStory story={story} key={story.id} storyId={story.id} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    pendingStories: state.pendingStories
  };
};

export default connect(mapStateToProps, { fetch_pending_stories })(AdminPortal);
