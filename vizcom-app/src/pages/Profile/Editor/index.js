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

<<<<<<< HEAD
const Editor = ({ updateProfile, history, uid,profile }) => {
=======
const Editor = ({ updateProfile, history, uid, user }) => {
>>>>>>> f315311d4995d49089f0ef9126c5eaf9b9fb2c93
  const { register, handleSubmit } = useForm();
  console.log(user)

  console.log(user.first_name)
  const submitForm = (formData) => {
    updateProfile(formData, uid);
    history.push("/profile");
  };
  console.log(profile.first_name)
  return (
    <div className="row form-container">
      <form className="col s12" onSubmit={handleSubmit(submitForm)}>
        <div className="row edit-profile">
          <Link to={"profile"}>
            <img className="backarrow" src={backarrow} />
          </Link>
          <h1>Edit profile</h1>
          
          <div className="input-field col s6">
<<<<<<< HEAD
            <input placeholder="Placeholder" defaultValue={profile.first_name} class="validate" type="text"  name="firstName" id="firstName" ref={register} />
            <label class="active" for="first_name">First Name</label>
          </div>
          <div className="input-field col s6">
            <label  class="active" htmlFor="name">Last Name</label>
            <input defaultValue={profile.last_name}  for="first_name" type="text" name="lastName" id="lastName"ref={register} />
=======
          <label  class = "active" for="first_name">First Name</label>
            <input type="text" name="firstName" id="firstName" ref={register} defaultValue={user.first_name}/>
          </div>
          <div className="input-field col s6">
            <label class = "active" htmlFor="name">Last Name</label>
            <input type="text" name="lastName" id="lastName" ref={register} defaultValue={user.last_name} />
>>>>>>> f315311d4995d49089f0ef9126c5eaf9b9fb2c93
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
<<<<<<< HEAD
            <label class="active"  htmlFor="name">Location</label>
            <input defaultValue={profile.location} type="text" name="location" id="location" ref={register} />
=======
            <label class = "active" htmlFor="name">Location</label>
            <input type="text" name="location" id="location" ref={register} defaultValue={user.location} />
>>>>>>> f315311d4995d49089f0ef9126c5eaf9b9fb2c93
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
<<<<<<< HEAD
            <label  class="active"  htmlFor="bio">Bio</label>
=======
            <label class = "active" htmlFor="bio">Bio</label>
>>>>>>> f315311d4995d49089f0ef9126c5eaf9b9fb2c93
            <textarea
              name="bio"
              className="materialize-textarea"
              id="bio"
              ref={register}
              maxLength="150"
<<<<<<< HEAD
              defaultValue={profile.bio}
=======
              defaultValue={user.bio}
>>>>>>> f315311d4995d49089f0ef9126c5eaf9b9fb2c93
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
<<<<<<< HEAD
                <label  class="active"  htmlFor="instagram">Instagram</label>
=======
                <label class = "active" htmlFor="instagram">Instagram</label>
>>>>>>> f315311d4995d49089f0ef9126c5eaf9b9fb2c93
                <input
                  class="active" 
                  type="text"
                  name="instagram"
                  id="instagram"
                  ref={register}
<<<<<<< HEAD
                  defaultValue={profile.instagram}
=======
                  defaultValue={user.instagram}
>>>>>>> f315311d4995d49089f0ef9126c5eaf9b9fb2c93
                />
              </div>
            </li>
            <li>
              <div className="input-field col s12">
                <i className="material-icons prefix">
                  <img src={twitterIcon} />
                </i>
<<<<<<< HEAD
                <label class="active"  htmlFor="twitter">Twitter</label>
                <input 
               
                defaultValue={profile.twitter}
                type="text" name="twitter" id="twitter" ref={register} />
=======
                <label class = "active" htmlFor="twitter">Twitter</label>
                <input type="text" name="twitter" id="twitter" ref={register} defaultValue={user.twitter} />
>>>>>>> f315311d4995d49089f0ef9126c5eaf9b9fb2c93
              </div>
            </li>
            <li>
              <div className="input-field col s12">
                <i className="material-icons prefix">
                  <img src={webIcon} />
                </i>
                <label class = "active" htmlFor="personalSite">Website</label>
                <input
                  class="active" 
                  defaultValue={profile.personal_site}
                  type="text"
                  name="personalSite"
                  id="personalSite"
                  ref={register}
                  defaultValue={user.personal_site}
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
    profile: state.profile.user
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
