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
  return (
    <div className="nav-container">
      <ul>
        <li>
          <Link to={HOME}>
            Tools
            {(location.pathname === GENERATE || location.pathname === HOME) && (
              <span>/{capitalizeFirstLetter(location.pathname)}</span>
            )}
          </Link>
        </li>
        <li>
          <Link to={PROFILE}>
            Profile
            {location.pathname === PROFILE && (
              <span>/{profile?.first_name}</span>
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
