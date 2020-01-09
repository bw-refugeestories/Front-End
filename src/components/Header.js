import React from "react";
import {connect} from 'react-redux';
import { Link, NavLink } from "react-router-dom";


const Header = props => {
  const isLoggedIn = props.isLoggedIn;
  return (
    <section className="header">
      <Link to="/">
        <h1 className="logo">Safe Refuge</h1>
      </Link>
      <ul className="menu">
        {
          isLoggedIn ? 
            <li>
              <NavLink exact to="/admin">
                Admin
              </NavLink>
            </li> : null
        }

        <li>
          <NavLink exact to="/submit-story">
            Submit Your Story
          </NavLink>
        </li>

        {
          isLoggedIn ?
            <li>
              <NavLink exact to="/logout">
                Logout
              </NavLink>
            </li> 
            :
            <li>
              <NavLink exact to="/login">
                Login
              </NavLink>
            </li>
        }

        {/* <li>
          <NavLink exact to="/login">
            Login
          </NavLink>
        </li> */}
      </ul>
    </section>
  );
};

const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn
  }
}

export default connect(mapStateToProps)(Header);
