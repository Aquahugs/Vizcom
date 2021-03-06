import React from "react";
import "./PrimaryNavbar.scss";
import Logo from "../../../assets/logo.png";
import SignOut from "../../../pages/LandingPage/Auth/SignOut";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { PROFILE } from "../../../router/routes-const";
import { Menu, Dropdown, Button, Space } from "antd";

import bell from "../../../assets/bell.svg";
import bellActive from "../../../assets/active-bell.svg";
import notiLogo from "../../../assets/noti-logo.png";

const PrimaryNav = ({ user, profile, notifications }) => {
  const menu = (
    <Menu>
      <Menu.Item>
        <div className="row noti-box">
          {notifications ? (
            notifications.map((notification) => (
              <Link to={notification.link}>
                <div>
                  <div>
                    <div className="col s9 m9 l9">
                      <p>You have invites 🎉</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div>
              <div className="col s2 m2 l2">
                <img src={notiLogo} />
              </div>
              <div className="col s10 m9 l10">
                <p>no notifications</p>
              </div>
            </div>
          )}
        </div>
      </Menu.Item>
    </Menu>
  );
  return (
    <nav>
      <div className="nav-wrapper">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <Link to="/home" className="logo-container">
          <img alt="logo" src={Logo} />
        </Link>
        <ul className="nav-items right ">
          <li className="notification-items">
            <Dropdown overlay={menu} placement="bottomRight">
              {notifications ? (
                <div style={{ width: "100px" }}>
                  {" "}
                  <img
                    style={{ width: "20px", height: "auto" }}
                    src={bellActive}
                  />{" "}
                </div>
              ) : (
                <img style={{ width: "20px", height: "auto" }} src={bell} />
              )}
            </Dropdown>
          </li>

          <li className="profile-items">
            <Link to={PROFILE} className="profile-name">
              {user?.authUser?.providerData[0]?.displayName
                ? user?.authUser?.providerData[0]?.displayName
                : profile?.display_name
                ? profile?.display_name
                : null}
              {user?.authUser?.providerData[0].photoURL ? (
                <img
                  alt="profile icon"
                  className="profile-picture"
                  src={user.authUser.providerData[0].photoURL}
                />
              ) : profile?.profile_photo ? (
                <img
                  alt="profile icon"
                  className="profile-picture"
                  src={profile.profile_photo}
                />
              ) : (
                ""
              )}
            </Link>
            <ul className="nav__submenu">
              <li style={{ float: "right " }}>
                <SignOut />
              </li>
            </ul>
          </li>

          <li>
            <a href="collapsible.html"></a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.session,
    profile: state.profile.user,
    notifications: state.notificationCenter.notifications,
  };
};

export default connect(mapStateToProps)(PrimaryNav);
