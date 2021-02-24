import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import { withAuthorization } from "../../router/auth/session";
import { Link } from "react-router-dom";

import ProfileThunks from "./redux/thunks"
import CollectionThunks from "./Collection/redux/thunks"
import BucketThunks from "./Bucket/redux/thunks"

import "./profile.scss";

import locationIcon from "../../assets/location-icon.svg";
import instaIcon from "../../assets/instagram.png";
import twitterIcon from "../../assets/twitter.png";
import plus from "../../assets/plus.png";



const Profile = ({user, collection, buckets, getUser, getCollection, getBuckets}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [view, setView] = useState('')

  useEffect(() => {
    if (!user) {
      getUser();
    }
    if (!collection){
      getCollection();
    }
    if (!buckets) {
      getBuckets();
    }
    setIsLoaded(true);
  }, [user, collection, buckets, getUser, getCollection, getBuckets])

  const toggleActive = (view) => {
    setView(view)
  }

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
              <Link to={"editor"}>
                <button class=" btn btn-flat edit-btn ">Edit profile</button>
              </Link>
              <h2>{user.first_name}</h2>
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

            <p>{user.bio}</p>
          </div>
          <div className="view-selector col s6 m6 l6">
            <h2>View</h2>
            <ul>
              <a>
                <li onClick={toggleActive('bucket')}>Buckets</li>
              </a>
              <a>
                <li onClick={toggleActive('collection')}>Collection</li>
              </a>
              <li>All</li>
            </ul>
          </div>
        </div>
        {view === 'bucket' && 
          <div className="row">
            {/* CREATE BUCKET LIST COMPONENT */}
            <Link to={"bucket"}>
              <button class=" btn btn-flat create-btn ">
                <img src={plus} />
                <br />
                Create new bucket
              </button> 
            </Link>
          </div>
        }
        {view === 'collection' && 
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
        }
      </div>
    );
  }
}

const mapDispatchToProps = {
  getProfile: ProfileThunks.getProfile,
  getCollection: CollectionThunks.getCollectionByUserId,
  getBuckets: BucketThunks.getBuckets,
}

const mapStateToProps = (state) => {
  return {
    user: state.profile.user,
    collection: state.collection.collection,
    buckets: state.bucket.buckets
  };
};

const condition = (authUser) => !!authUser;

export default compose(
  withAuthorization(condition),
  connect(mapStateToProps, mapDispatchToProps)
)(Profile);
