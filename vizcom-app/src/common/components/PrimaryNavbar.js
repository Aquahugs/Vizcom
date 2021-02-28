import React, { useState } from "react";
import "./PrimaryNavbar.scss";
import Logo from "../../assets/logo.png";
import NewBucket from "../../assets/create-bucket.svg";
import SignOut from "../../pages/LandingPage/Auth/SignOut";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const PrimaryNav = (props) => {
  console.log(props);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="logo-container">
          <img src={Logo} />
        </a>
        <ul className="nav-items right hide-on-med-and-down">
          <li>
            <a style={{ color: "#505050", fontSize: "16px" }} href="">
              new bucket
            </a>
          </li>
          <li className = 'profile-items'>
            <Link
              to="/profile"
              style={{ color: "#505050", fontSize: "16px" }}
              href="http://localhost:3000/profile"
            >
              {props.user.authUser.providerData[0].displayName}
              {props.user.authUser.providerData ? (
                <img
                  className="profile-picture"
                  src={props.user.authUser.providerData[0].photoURL}
                />
              ) : null}
            </Link>
            <ul className="nav__submenu">
              <li style = {{float:'right '}}>
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
