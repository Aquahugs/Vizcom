import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = ({ darkmode }) => {
  if ((darkmode = "dark")) {
    return (
      <div className="row footer-items-dark">
        <div className="col s12 m12 l12 info">
          <ul className="dark-list">
            <Link to="/about">
              <li>About</li>
            </Link>
            <li>Contact</li>
            <a href="https://twitter.com/Vizcom_io">
              <li>Twitter</li>
            </a>
            <a href="https://www.instagram.com/vizcom.io/">
              <li>Instagram</li>
            </a>
          </ul>
        </div>
      </div>
    );
  }
  if ((darkmode = "light")) {
    return (
      <div className="row footer-items">
        <div className="col s12 m12 l12 info">
          <ul>
            <Link to="/about">
              <li>About</li>
            </Link>
            <li>Contact</li>
            <a href="https://twitter.com/Vizcom_io">
              <li>Twitter</li>
            </a>
            <a href="https://www.instagram.com/vizcom.io/">
              <li>Instagram</li>
            </a>
          </ul>
        </div>
      </div>
    );
  }
};

export default Footer;
