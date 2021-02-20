import React, { Component } from "react";
import { connect } from "react-redux";
import "./newbucket.scss";
import M from "materialize-css";
import { compose } from "recompose";
import StyledDropzone from "./Dropzone";
import backarrow from "../../assets/back-arrow.svg";

class NewBucket extends Component {
  constructor(props) {
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
      <div class="row create-container">
        <form class="col s12">
          <div class="row edit-profile">
            <a href="http://localhost:3000/profile">
              <img class="backarrow" src={backarrow} />
            </a>
            <h1>Create bucket</h1>
            <p>Collect and organize images in digital buckets</p>
            <div class="input-field col s12">
              <input id="bucket_name" type="text" class="validate" />
              <label for="bucket_name">Bucket Name</label>
            </div>
            <div class="input-field col s12">
              <input id="last_name" type="text" class="validate" />
              <label for="last_name">Description</label>
            </div>
          </div>
          <StyledDropzone />
          <div class="switch">
            <label class="secret-button">
              <span>Keep it as a secret</span>
              <input type="checkbox" />
              <span class="lever"></span>
              <br />
              Only you and participants can see it
            </label>
          </div>

          <div class="switch"></div>

          <div class="row action-buttons">
            <a href="http://localhost:3000/profile">
              <button class="btn waves-effect waves-light">Cancel</button>
            </a>

            <button
              class="btn  waves-light save-btn"
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

export default connect(mapStateToProps)(NewBucket);
