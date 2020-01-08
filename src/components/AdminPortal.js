import React from "react";
import { connect } from "tls";
import { fetch_pending_stories } from '../utils/actions';

const AdminPortal = () => {
  return (
    <div>Admin portal</div>
  );
};

const mapStateToProps = state => {
  return {
    pendingStories: state.pendingStories
  }
}

export default AdminPortal;
