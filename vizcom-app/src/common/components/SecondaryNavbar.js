import React from "react";
import { connect } from "react-redux";
import "./SecondaryNavbar.scss";
import { Link, useLocation } from "react-router-dom";
import { GENERATE, HOME, PROFILE, EXPLORE } from "../../router/routes-const";

const SecondaryNav = ({ profile }) => {
  let location = useLocation();
  function capitalizeFirstLetter(string) {
    return string.charAt(1).toUpperCase() + string.slice(2);
  }

  const styles = {
    fontWeight:600
  };
  return (
    <div className="nav-container">
      <ul>
        <li>
          <Link to={HOME}>
            Tools
<<<<<<< HEAD
            {(location.pathname === "/generate" ||
              location.pathname === "/home") && (
              <span style = {styles}>/{capitalizeFirstLetter(location.pathname)}</span>
=======
            {(location.pathname === GENERATE || location.pathname === HOME) && (
              <span>/{capitalizeFirstLetter(location.pathname)}</span>
>>>>>>> c1d52460181f583033f80f1ed6fd77e16ef1487d
            )}
          </Link>
        </li>
        <li>
          <Link to={PROFILE}>
            Profile
<<<<<<< HEAD
            {location.pathname === "/profile" && (
              <span style = {styles}>/{profile.first_name}</span>
=======
            {location.pathname === PROFILE && (
              <span>/{profile?.first_name}</span>
>>>>>>> c1d52460181f583033f80f1ed6fd77e16ef1487d
            )}
          </Link>
        </li>
        <li>
          <Link to={EXPLORE}>Explore</Link>
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
