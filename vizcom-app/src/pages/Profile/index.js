import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import { withAuthorization } from "../../router/auth/session";
import { Link } from "react-router-dom";

import ProfileThunks from "./redux/thunks";
import CollectionThunks from "./Collection/redux/thunks";
import BucketThunks from "../Bucket/redux/thunks";

import BucketList from "../Bucket/BucketList";
import { EDITOR, ADD_BUCKET } from "../../router/routes-const";

import "./profile.scss";
import locationIcon from "../../assets/location-icon.svg";
import instaIcon from "../../assets/instagram.png";
import twitterIcon from "../../assets/twitter.png";
import plus from "../../assets/plus.png";

const Profile = ({
  uid,
  profile,
  collection,
  buckets,
  getProfile,
  getCollection,
  getBuckets,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [view, setView] = useState("");

  useEffect(() => {
    if (!profile) {
      getProfile(uid);
    }
    console.log("collection", collection);
    if (!collection) {
      getCollection(uid);
      console.log("collection", collection);
    }
    if (!buckets) {
      getBuckets(uid);
      console.log("buckets", buckets);
    }
    setIsLoaded(true);
    console.log("buckets", buckets);
  }, [
    profile,
    collection,
    buckets,
    uid,
    getProfile,
    getCollection,
    getBuckets,
  ]);

  const toggleView = (e) => {
    setView(e);
    console.log(view);
  };

  if (!isLoaded && profile) {
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
              <Link to={EDITOR}>
                <button class=" btn btn-flat edit-btn ">Edit profile</button>
              </Link>
              {profile && <h2>{profile.first_name}</h2>}
            </div>

            <div className="row">
              <div className="col s6 m6 l6 location-container">
                <img className="location-icon" src={locationIcon} />
                {profile && <p>{profile.location}</p>}
              </div>
              <div className="col s6 m6 l6 social-icons">
                {profile && (
                  <a
                    href={profile.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="logo-container"
                  >
                    <img src={instaIcon} />
                  </a>
                )}
                {profile && (
                  <a
                    href={profile.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="logo-container"
                  >
                    <img src={twitterIcon} />
                  </a>
                )}
              </div>
            </div>
            {profile && <p>{profile.bio}</p>}
          </div>
          <div className="view-selector col s6 m6 l6">
            <h2>View</h2>
            <ul>
              <a>
                <li onClick={() => toggleView("bucket")}>Buckets</li>
              </a>
              <a>
                <li onClick={() => toggleView("collection")}>Collection</li>
              </a>
              <li>All</li>
            </ul>
          </div>
        </div>
        {view === "bucket" && (
          <div className="row">
            <Link to={ADD_BUCKET}>
              <button class=" btn btn-flat create-btn ">
                <img src={plus} />
                <br />
                Create new bucket
              </button>
            </Link>
            <BucketList user={profile} buckets={buckets} />
          </div>
        )}
        {view === "collection" && collection && (
          <div className="row">
            {/* CREATE COLLECTION LIST COMPONENT */}
            {collection.map((image) => {
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
        )}
      </div>
    );
  }
};

const mapDispatchToProps = {
  getProfile: ProfileThunks.getProfile,
  getCollection: CollectionThunks.getCollectionByUserId,
  getBuckets: BucketThunks.getBuckets,
};

const mapStateToProps = (state) => {
  return {
    uid: state.session.authUser.uid,
    profile: state.profile.user,
    collection: state.collection.collection,
    buckets: state.bucket.buckets,
  };
};

const condition = (authUser) => !!authUser;

export default compose(
  withAuthorization(condition),
  connect(mapStateToProps, mapDispatchToProps)
)(Profile);
