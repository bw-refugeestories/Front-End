import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <section className="header">
      <Link to="/">
        <h1 className="logo">Safe Refuge</h1>
      </Link>
      <ul className="menu">
        <li>
          <NavLink exact to="/submit-story">
            Submit Your Story
          </NavLink>
        </li>

        <li>
          <NavLink exact to="/login">
            Login
          </NavLink>
        </li>
      </ul>
    </section>
  );
};

export default Header;
