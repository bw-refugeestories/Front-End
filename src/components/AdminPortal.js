import React from "react";
import { connect } from "tls";

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

export default connect(mapStateToProps, {})(AdminPortal);
