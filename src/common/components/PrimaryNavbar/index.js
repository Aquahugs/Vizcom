import React from "react";
import "./PrimaryNavbar.scss";
import Logo from "../../../assets/logo.png";
import SignOut from "../../../pages/LandingPage/Auth/SignOut";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { PROFILE } from "../../../router/routes-const";
import { Menu, Dropdown, Button, Space } from "antd";

import bell from "../../../assets/notification-bell.svg";

const PrimaryNav = ({ user, profile }) => {
  const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="/invite-center">
          <div className="row noti-box">
            <div className="col s2 m2 l2">
              <img src="https://via.placeholder.com/20" />
            </div>
            <div className="col s10 m9 l10">
              <p>
                You have 5 sketch to render <br />
                invites available.
              </p>
            </div>
          </div>
        </a>
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
          {profile?.is_admin && (
            <li>
              <Link to="/admin" className="profile-name">
                {" "}
                Admin
              </Link>
            </li>
          )}

          <li className="notification-items">
            <Dropdown overlay={menu} placement="bottomRight">
              <img src={bell} />
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
  };
};

export default connect(mapStateToProps)(PrimaryNav);
