import React, { useState } from "react";
import "./PrimaryNavbar.scss";
import Logo from "../../assets/logo.png";
import NewBucket from "../../assets/plus.png";
import SignOut from "../../pages/LandingPage/Auth/SignOut";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ADD_BUCKET, PROFILE } from "../../router/routes-const";

const PrimaryNav = ({ user }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="logo-container">
          <img src={Logo} />
        </a>
        <ul className="nav-items right ">
          <li>
            <Link
              to={ADD_BUCKET}
              style={{ color: "#505050", fontSize: "16px" }}
            >
              <img
                src={NewBucket}
                className="nav-addbucket hide-on-med-and-down"
              />
              <span className="hide-on-med-and-down">new bucket </span>
            </Link>
          </li>
          <li className="profile-items">
            <Link to={PROFILE} style={{ color: "#505050", fontSize: "16px" }}>
              {user.authUser.providerData[0].displayName}
              {user.authUser.providerData ? (
                <img
                  className="profile-picture"
                  src={user.authUser.providerData[0].photoURL}
                />
              ) : null}
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
          {/* <li>
            <SignOut />
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.session,
  };
};

export default connect(mapStateToProps)(PrimaryNav);
