import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Footer = ({ darkmode, profile }) => {
  if ((darkmode = "dark")) {
    return (
      <div className="row footer-items-dark">
        <div className="col s6 m6 l6 info" style={{ color: "white" }}>
          <span className="company">2021 Vizcom AI, Inc.</span>
        </div>
        <div className="col s6 m6 l6 info">
          <ul className="dark-list">
            {profile?.is_admin && (
              <li>
                <Link to="/admin"> Admin</Link>
              </li>
            )}
            {/* <li>Contact</li> */}
            <a className="hvr-grow-shadow" href="https://twitter.com/Vizcom_co">
              <li>Twitter</li>
            </a>
            <a
              className="hvr-grow-shadow"
              href="https://www.instagram.com/vizcom_/"
            >
              <li>Instagram</li>
            </a>
            <Link className="hvr-grow-shadow" to="/privacy-policy">
              <li>Privacy Policy</li>
            </Link>
            <Link className="hvr-grow-shadow" to="/terms-of-use">
              <li>Terms of Use</li>
            </Link>
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
            {profile?.is_admin && (
              <li>
                <Link to="/admin"> Admin</Link>
              </li>
            )}
            <Link className="hvr-grow-shadow" to="/about">
              <li>About</li>
            </Link>

            <a className="hvr-grow-shadow" href="https://twitter.com/Vizcom_co">
              <li>Twitter</li>
            </a>
            <a
              className="hvr-grow-shadow"
              href="https://www.instagram.com/vizcom_/"
            >
              <li>Instagram</li>
            </a>
            <Link className="hvr-grow-shadow" to="/privacy-policy">
              <li>Privacy Policy</li>
            </Link>
            <Link className="hvr-grow-shadow" to="/terms-of-use">
              <li>Terms of Use</li>
            </Link>
          </ul>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    profile: state.profile.user,
  };
};

export default connect(mapStateToProps)(Footer);
