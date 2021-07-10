import React from "react";
import { connect } from "react-redux";
import "./SecondaryNavbar.scss";
import { Link, useLocation } from "react-router-dom";
import { HOME, PROFILE, EXPLORE } from "../../../router/routes-const";

const SecondaryNav = ({ profile }) => {
  let location = useLocation();
  function capitalizeFirstLetter(string) {
    return string.charAt(1).toUpperCase() + string.slice(2);
  }

  const styles = {
    fontWeight: 600,
  };
  return (
    <div className="nav-container">
      <ul>
        <li className=" hvr-forward">
          <Link to={HOME}>
            Tools
            {(location.pathname === "/generate" ||
              location.pathname === "/home" ||
              location.pathname === "/sketch-to-render" ||
              location.pathname === "/sketch-to-render/beta") && (
              <span style={styles}>
                /{capitalizeFirstLetter(location.pathname)}
              </span>
            )}
          </Link>
        </li>
        <li className=" hvr-forward">
          <Link to={PROFILE}>
            Collection
            {location.pathname === "/profile" && profile?.first_name && (
              <span style={styles}>/{profile?.first_name}</span>
            )}
          </Link>
        </li>
        <li className="hvr-forward">
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
