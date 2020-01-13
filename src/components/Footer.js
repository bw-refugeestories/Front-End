import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="footer">
      <div className="box">
        <h5>Social Media</h5>
        <ul className="social">
          <li>
            <i className="fa fa-facebook-square"></i> @saferefuge
          </li>
          <li>
            <i className="fa fa-twitter-square"></i> @SafeRefuge
          </li>
          <li>
            <i className="fa fa-instagram"></i> @safe-refuge
          </li>
        </ul>
      </div>
      <div className="box">
        <h5>Contact us</h5>
        <address>
          123 Safe Refuge Rd.
          <br />
          Austin, TX 84520
          <br />
          (555)-555-5555
          <br />
          contact@saferefuge.world
        </address>
      </div>
      <div className="box">
        <h5>Links</h5>
        <ul className="links">
          <li>
            <a href="https://saferefuge.netlify.com/" target="_blank">Safe Refuge Home Page</a>
          </li>
          <li>
            <Link to="/submit-story">Submit Your Story</Link>
          </li>
          <li>
            <Link to="/admin">Admin Login</Link>
          </li>
          <li>
            <a href="https://saferefuge.com/aboutus">About Us</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
