import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./SecondaryNavbar.scss";

const SecondaryNav = ({ user, profile }) => {
  return (
    <div className="nav-container">
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        {profile && <h2>{profile.first_name}</h2>}
        <li>
          <Link to="/explore">Explore</Link>
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.session,
    profile: state.profile.user,
  };
};

export default connect(mapStateToProps)(SecondaryNav);
