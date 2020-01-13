import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { fetch_users } from "../utils/actions";
import UserInfo from "./UserInfo.js";

const AdminDeleteUser = ({ fetch_users, users }) => {
  useEffect(() => {
    fetch_users();
  }, []);

  return (
    <div className="admin-portal">
      <h2>Users</h2>
      <div className="users-wrapper">
        {users.length > 0
          ? users.map(user => (
              <UserInfo user={user} key={user.id} userId={user.id} />
            ))
          : "Loading Users..."}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default connect(mapStateToProps, { fetch_users })(AdminDeleteUser);
