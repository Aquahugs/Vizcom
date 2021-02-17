import React from "react";

import { connect } from "react-redux";

import "./editor.scss";
import M from "materialize-css";
import { compose } from "recompose";
import twitterIcon from "../../assets/twitter.png";
import instaIcon from "../../assets/instagram.png";
import webIcon from "../../assets/website.png";
import backarrow from "../../assets/back-arrow.svg";
import { Link } from "react-router-dom";
import { ProfileThunks } from "../Profile/redux";
import { withAuthorization } from "../../router/auth/session";
import { useForm } from "react-hook-form";

const Editor = ({ updateProfile, history, uid }) => {
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
            <img className="backarrow" src={backarrow} />
          </Link>
          <h1>Edit profile</h1>
          <div className="input-field col s6">
            <label htmlFor="name">First Name</label>
            <input type="text" name="firstName" id="firstName" ref={register} />
          </div>
          <div className="input-field col s6">
            <label htmlFor="name">Last Name</label>
            <input type="text" name="lastName" id="lastName" ref={register} />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <label htmlFor="name">Location</label>
            <input type="text" name="location" id="location" ref={register} />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <label htmlFor="bio">Bio</label>
            <textarea
              name="bio"
              className="materialize-textarea"
              id="bio"
              ref={register}
              maxLength="150"
            />
          </div>
        </div>
        <div className="row socials">
          <ul>
            <h1>Socials</h1>
            <li>
              <div className="input-field col s12">
                <i className="material-icons prefix">
                  <img src={instaIcon} />
                </i>
                <label htmlFor="instagram">Instagram</label>
                <input
                  type="text"
                  name="instagram"
                  id="instagram"
                  ref={register}
                />
              </div>
            </li>
            <li>
              <div className="input-field col s12">
                <i className="material-icons prefix">
                  <img src={twitterIcon} />
                </i>
                <label htmlFor="twitter">Twitter</label>
                <input type="text" name="twitter" id="twitter" ref={register} />
              </div>
            </li>
            <li>
              <div className="input-field col s12">
                <i className="material-icons prefix">
                  <img src={webIcon} />
                </i>
                <label htmlFor="personalSite">Website</label>
                <input
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
          <Link to={"profile"}>
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
            >
              Cancel
            </button>{" "}
          </Link>
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.profile.user,
    uid: state.session.authUser.uid,
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
