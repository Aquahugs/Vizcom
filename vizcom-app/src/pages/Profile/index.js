import React, { Component } from "react";
import { connect } from "react-redux";
import "./profile.scss";
import { compose } from "recompose";
import locationIcon from "../../assets/location-icon.svg";
import instaIcon from "../../assets/instagram.png";
import twitterIcon from "../../assets/twitter.png";
import plus from "../../assets/plus.png";
import { withAuthorization } from "../../router/auth/session";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      displayName: props.user.authUser?.providerData[0]?.displayName,
      isLoaded: true,
      isMe: false,
      info: [],
      selectedFile: [],
      bio: null,
      view: "bucket",
    };
  }

  toggleActive = () => {
    if (this.state.view === "bucket") {
      this.setState({ view: "collection" });
    } else {
      this.setState({ view: "bucket" });
    }
    console.log(this.state);
  };

  render() {
    const { isLoaded } = this.state;
    // Conditonal style logic to toggle view properties
    const bucketActive = {
      visibility: this.state.view === "bucket" ? "visible" : "hidden",
      display: this.state.view === "collection" ? "none" : "inline-block",
    };
    const collectionActive = {
      visibility: this.state.view === "collection" ? "visible" : "hidden",
      display: this.state.view === "bucket" ? "none" : "inline-block",
    };

    if (!isLoaded) {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    } else {
      return (
        <div className="profile-container">
          <div className="row">
            <div className="col sm6 m6 l6">
              <div className="row bio-header">
                <a href="http://localhost:3000/editor">
                  <button class=" btn btn-flat edit-btn ">Edit profile</button>
                </a>
                <h2>{this.props.user.display_name}</h2>
              </div>

              <div className="row">
                <div className="col s6 m6 l6 location-container">
                  <img className="location-icon" src={locationIcon} />
                  <p>Moutainview, California</p>
                </div>
                <div className="col s6 m6 l6 social-icons">
                  <img src={instaIcon} />
                  <img src={twitterIcon} />
                </div>
              </div>

              <p>{this.props.user.bio}</p>
            </div>
            <div className="view-selector col s6 m6 l6">
              <h2>View</h2>
              <ul>
                <a>
                  <li onClick={this.toggleActive}>Buckets</li>
                </a>
                <a>
                  <li onClick={this.toggleActive}>Collection</li>
                </a>
                <li>All</li>
              </ul>
            </div>
          </div>

          <div className="row" style={bucketActive}>
            <a href="http://localhost:3000/newbucket">
              <button class=" btn btn-flat create-btn ">
                <img src={plus} />
                <br />
                Create new bucket
              </button>
            </a>
          </div>

          {/* Users collection */}
          <div className="row " style={collectionActive}>
            {this.props.collection.map((image) => {
              return (
                //post tags
                <div
                  className=" collection-container col s3 m3 l3"
                  key={image.collection_image_id}
                >
                  <img className="collection-image" src={image.image_uri} />
                </div>
              );
            })}
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.profile.user,
    collection: state.profile.collection,
  };
};

const condition = (authUser) => !!authUser;

export default compose(
  withAuthorization(condition),
  connect(mapStateToProps)
)(Profile);
