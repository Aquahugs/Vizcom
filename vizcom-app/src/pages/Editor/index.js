import React, { Component } from "react";
import { connect } from "react-redux";
import "./editor.scss";
import M from "materialize-css";
import { compose } from "recompose";
<<<<<<< HEAD:vizcom-app/src/pages/Editor/index.js
import twitterIcon from '../../assets/twitter.png'
import instaIcon from '../../assets/instagram.png'
import webIcon from '../../assets/website.png'
import backarrow from '../../assets/back-arrow.svg'


class Editor extends Component {
  constructor(props){
=======
import twitterIcon from "../../assets/twitter.png";
import instaIcon from "../../assets/instagram.png";
import webIcon from "../../assets/website.png";

class Profile extends Component {
  constructor(props) {
>>>>>>> 99b15b75d6356f869173cd7313b7ae9179dd4192:vizcom-app/src/pages/Profile/editor.js
    super(props);
    this.state = {
      images: [],
      photoURL: props.user.authUser.providerData[0].photoURL,
      displayName: props.user.authUser.providerData[0].displayName,
      uuid: props.user.authUser.uid,
      isLoaded: false,
      isLoggedIn: props.user.authUser.uid,
      isMe: false,
      isEdit: false,
      isEditBio: false,
      info: [],
      selectedFile: [],
      userCollection: [],
      bio: null,
      newbio: null,
      view: "bucket",
    };
  }

  componentDidMount() {
    const { uuid } = this.state;
    let input = document.getElementById("textarea2");
    M.CharacterCounter.init(input);
  }

  render() {
    return (
<<<<<<< HEAD:vizcom-app/src/pages/Editor/index.js
      <div class="row form-container">
        <form class="col s12">
          <div class="row edit-profile">
            <a href = "http://localhost:3000/profile">
              <img class = 'backarrow' src = {backarrow}/>
            </a>
=======
      <div className="row form-container">
        <form className="col s12">
          <div className="row edit-profile">
>>>>>>> 99b15b75d6356f869173cd7313b7ae9179dd4192:vizcom-app/src/pages/Profile/editor.js
            <h1>Edit profile</h1>
            <div className="input-field col s6">
              <input
                id="first_name"
                placeholder={this.state.displayName}
                type="text"
                className="validate"
              />
              <label for="first_name">First Name</label>
            </div>
            <div className="input-field col s6">
              <input id="last_name" type="text" className="validate" />
              <label for="last_name">Last Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="location" type="text" className="validate" />
              <label for="location">Location</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <textarea
                id="textarea2"
                className="materialize-textarea"
                maxLength="150"
              ></textarea>
              <label for="textarea2">Bio</label>
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
                  <input id="instagram" type="text" className="validate" />
                  <label for="instagram">Instagram</label>
                </div>
              </li>
              <li>
                <div className="input-field col s12">
                  <i className="material-icons prefix">
                    <img src={twitterIcon} />
                  </i>
                  <input id="instagram" type="text" className="validate" />
                  <label for="instagram">Twitter</label>
                </div>
              </li>
              <li>
                <div className="input-field col s12">
                  <i className="material-icons prefix">
                    <img src={webIcon} />
                  </i>
                  <input id="website" type="text" className="validate" />
                  <label for="website">Website</label>
                </div>
              </li>
            </ul>
          </div>

          <div className="row action-buttons">
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
            >
              Cancel
            </button>
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
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.session,
  };
};

const condition = (authUser) => !!authUser;

<<<<<<< HEAD:vizcom-app/src/pages/Editor/index.js

export default connect (mapStateToProps)(Editor);
=======
export default connect(mapStateToProps)(Profile);
>>>>>>> 99b15b75d6356f869173cd7313b7ae9179dd4192:vizcom-app/src/pages/Profile/editor.js
