import React from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { compose } from "recompose";
import { Link } from "react-router-dom";

import "./editor.scss";
import M from "materialize-css";
import twitterIcon from "../../../assets/twitter.png";
import instaIcon from "../../../assets/instagram.png";
import webIcon from "../../../assets/website.png";
import backarrow from "../../../assets/back-arrow.svg";

import { ProfileThunks } from "../redux";
import { withAuthorization } from "../../../router/auth/session";

const Editor = ({ updateProfile, history, uid, user }) => {
  const { register, handleSubmit } = useForm();

  const submitForm = (formData) => {
    updateProfile(formData, uid);
    history.push("/profile");
  };

  return (
    <div className="row form-container">
      <form className="col s12" onSubmit={handleSubmit(submitForm)}>
        <div className="row edit-profile">
          <Link to={"profile"}>
            <img alt="back arrow" className="backarrow" src={backarrow} />
          </Link>
          <h1>Edit Profile</h1>

          <div className="input-field col s6">
            <label className="active" for="first_name">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              ref={register}
              defaultValue={user?.first_name ? user?.first_name : ""}
            />
          </div>
          <div className="input-field col s6">
            <label className="active" htmlFor="name">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              ref={register}
              defaultValue={user?.last_name ? user?.last_name : ""}
            />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <label className="active" htmlFor="name">
              Location
            </label>
            <input
              type="text"
              name="location"
              id="location"
              ref={register}
              defaultValue={user?.location ? user?.location : ""}
            />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <label className="active" htmlFor="bio">
              Bio
            </label>
            <textarea
              name="bio"
              className="materialize-textarea"
              id="bio"
              ref={register}
              maxLength="150"
              defaultValue={user?.bio ? user?.bio : ""}
            />
          </div>
        </div>
        <div className="row socials">
          <ul>
            <h1>Socials</h1>
            <li>
              <div className="input-field social-icons-mobile col s12">
                <i className="material-icons prefix">
                  <img alt="insta icon" src={instaIcon} />
                </i>
                <label className="active" htmlFor="instagram">
                  Instagram
                </label>
                <input
                  className="active"
                  type="text"
                  name="instagram"
                  id="instagram"
                  ref={register}
                  defaultValue={user?.instagram ? user?.instagram : ""}
                  placeholder="https://www.instagram.com/yourusername/"
                />
              </div>
            </li>
            <li>
              <div className="input-field social-icons-mobile col s12">
                <i className="material-icons prefix">
                  <img src={twitterIcon} />
                </i>
                <label className="active" htmlFor="twitter">
                  Twitter
                </label>
                <input
                  type="text"
                  name="twitter"
                  id="twitter"
                  ref={register}
                  defaultValue={user?.twitter ? user?.twitter : ""}
                  placeholder="https://twitter.com/yourusername"
                />
              </div>
            </li>
            <li>
              <div className="input-field col s12 social-icons-mobile">
                <i className="material-icons prefix">
                  <img alt="web icon" src={webIcon} />
                </i>
                <label className="active" htmlFor="personalSite">
                  Website
                </label>
                <input
                  className="active"
                  defaultValue={user?.personal_site ? user?.personal_site : ""}
                  type="text"
                  name="personalSite"
                  id="personalSite"
                  ref={register}
                />
              </div>
            </li>
          </ul>
        </div>
        <div className="row action-buttons">
          <button
            className="btn waves-effect waves-light save-btn"
            type="submit"
            name="action"
          >
            Save
          </button>
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Cancel
          </button>{" "}
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.profile.user,
    uid: state.session.authUser.uid,
    profile: state.profile.user,
  };
};

const mapDispatchToProps = {
  updateProfile: ProfileThunks.updateProfile,
};

const condition = (authUser) => !!authUser;

export default compose(
  withAuthorization(condition),
  connect(mapStateToProps, mapDispatchToProps)
)(Editor);
