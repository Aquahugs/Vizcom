import React, { useState } from "react";
import "./PrimaryNavbar.scss";
import Logo from "../../assets/logo.png";
import NewBucket from "../../assets/plus.png";
import SignOut from "../../pages/LandingPage/Auth/SignOut";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ADD_BUCKET, PROFILE } from "../../router/routes-const";

const PrimaryNav = ({ user, profile }) => {
  return (
    <nav>
      <div className="nav-wrapper">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="/home" className="logo-container">
          <img alt="logo" src={Logo} />
        </a>
        <ul className="nav-items right ">
          <li>
            <Link
              to={ADD_BUCKET}
              style={{ color: "#505050", fontSize: "16px" }}
            >
              <img
                alt="create a bucket icon"
                src={NewBucket}
                className="nav-addbucket hide-on-med-and-down"
              />
              <span className="hide-on-med-and-down">New Bucket </span>
            </Link>
          </li>
          <li className="profile-items">
            <Link to={PROFILE}  className = "profile-name">
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
              ) : profile?.image_uri ? (
                <img
                  alt="profile icon"
                  className="profile-picture"
                  src={profile.image_uri}
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
