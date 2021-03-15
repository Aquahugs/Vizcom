import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./SecondaryNavbar.scss";
import { Link, useLocation } from "react-router-dom";

const SecondaryNav = ({ user, profile }) => {
  let location = useLocation();
  function capitalizeFirstLetter(string) {
    return string.charAt(1).toUpperCase() + string.slice(2);
  }
  return (
    <div className="nav-container">
      <ul>
        <li>
          <Link to="/home">
            Tools
            {(location.pathname === "/generate" ||
              location.pathname === "/home") && (
              <span>/{capitalizeFirstLetter(location.pathname)}</span>
            )}
          </Link>
        </li>
        <li>
          <Link to="/profile">
            Profile
            {location.pathname === "/profile" && (
              <span>/{profile.first_name}</span>
            )}
          </Link>
        </li>
        {/* {profile && <h2>{profile.first_name}</h2>} */}
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
