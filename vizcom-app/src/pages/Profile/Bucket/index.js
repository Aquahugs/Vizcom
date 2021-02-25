import React, { Component } from "react";
import { connect } from "react-redux";
import "./newbucket.scss";
import M from "materialize-css";
import { compose } from "recompose";
import StyledDropzone from "./Dropzone";
import backarrow from "../../../assets/back-arrow.svg";

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
      <div className="row create-container">
        <form className="col s12">
          <div className="row edit-profile">
            <a href="http://localhost:3000/profile">
              <img className="backarrow" src={backarrow} />
            </a>
            <h1>Create bucket</h1>
            <p>Collect and organize images in digital buckets</p>
            <div className="input-field col s12">
              <input id="bucket_name" type="text" className="validate" />
              <label for="bucket_name">Bucket Name</label>
            </div>
            <div className="input-field col s12">
              <input id="last_name" type="text" className="validate" />
              <label for="last_name">Description</label>
            </div>
          </div>
          <StyledDropzone />
          <div className="switch">
            <label className="secret-button">
              <span>Keep it as a secret</span>
              <input type="checkbox" />
              <span className="lever"></span>
              <br />
              Only you and participants can see it
            </label>
          </div>

          <div className="switch"></div>

          <div className="row action-buttons">
            <a href="http://localhost:3000/profile">
              <button className="btn waves-effect waves-light">Cancel</button>
            </a>

            <button
              className="btn  waves-light save-btn"
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
