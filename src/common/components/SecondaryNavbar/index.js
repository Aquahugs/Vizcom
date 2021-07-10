import React from "react";
import { connect } from "react-redux";
import "./SecondaryNavbar.scss";
import { Link, useLocation } from "react-router-dom";
import { HOME, PROFILE, EXPLORE } from "../../../router/routes-const";
import { Breadcrumb } from "antd";

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
        <li className="hvr-forward ">
          <li>
            <Breadcrumb>
              <Breadcrumb.Item>
                <Link to={HOME}>Tools</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                {(location.pathname === "/generate" ||
                  location.pathname === "/sketch-to-render" ||
                  location.pathname === "/sketch-to-render/beta" ||
                  location.pathname === "/home") && (
                  <span className="hvr-forward" style={styles}>
                    {capitalizeFirstLetter(location.pathname)}
                  </span>
                )}
              </Breadcrumb.Item>
            </Breadcrumb>
          </li>
        </li>

        <li className="hvr-forward ">
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to={PROFILE}>Collection</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              {location.pathname === "/profile" && profile?.first_name && (
                <span style={styles}>{profile?.first_name}</span>
              )}
            </Breadcrumb.Item>
          </Breadcrumb>
        </li>

        <li className="hvr-forward ">
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to={EXPLORE}>Explore</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              {location.pathname === "/explore" && (
                <span style={styles}>home</span>
              )}
            </Breadcrumb.Item>
          </Breadcrumb>
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
