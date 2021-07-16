import React from "react";
import "../Footer/Footer.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const LightFooter = ({ darkmode, profile }) => {
  return (
    <div className="row footer-items lightlist">
      <div className="col s12 m12 l12 info">
        <ul>
          {profile?.is_admin && (
            <li>
              <Link to="/admin"> Admin</Link>
            </li>
          )}
          <Link to="/about">
            <li>About</li>
          </Link>
          <a target="_blank" href="https://twitter.com/Vizcom_co">
            <li>Twitter</li>
          </a>
          <a target="_blank" href="https://www.instagram.com/vizcom_/">
            <li>Instagram</li>
          </a>
          <Link to="/privacy-policy">
            <li>Privacy Policy</li>
          </Link>
          <Link to="/terms-of-use">
            <li>Terms of Use</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    profile: state.profile.user,
  };
};

export default connect(mapStateToProps)(LightFooter);
