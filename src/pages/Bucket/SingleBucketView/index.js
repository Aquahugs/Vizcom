import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import { Link } from "react-router-dom";
import { withAuthorization } from "../../../router/auth/session";
import "./singlebucketview.scss";
import backarrow from "../../../assets/back-arrow.svg";
import Modal from "./Modal";
import ProfileThunks from "../../Profile/redux/thunks";
import CollectionThunks from "../../Profile/Collection/redux/thunks";
import BucketThunks from "../redux/thunks";

const SingleBucketView = ({
  match,
  profile,
  getProfile,
  uid,
  getBuckets,
  deleteBucketImage,
  buckets,
  deleteBucket,
  history,
}) => {
  const [bucket, setBucket] = useState(null);

  useEffect(() => {
    const { params } = match;

    if (!profile) {
      getProfile(uid);
    }
    getBuckets(uid).then(() => {
      setBucket(
        buckets?.find(
          (bucket) => bucket.bucket_id === parseInt(params.bucket_id)
        )
      );
    });
  }, [buckets]);

  const deleteBucketImageHandler = ({ collection_image_id }) => {
    const req = {
      collection_image_id,
      uuid: uid,
    };
    deleteBucketImage(req);
  };

  const deleteBucketHandler = () => {
    const req = {
      bucket_id: bucket.bucket_id,
      uuid: uid,
    };
    deleteBucket(req);
    history.push("/profile");
  };

  if (!bucket) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  } else {
    return (
      <div className="view-container row">
        <h1>{bucket.bucket_name}</h1>

        <div className="row top-items">
          <div className="col s9 m9 l9">
            <Link to={"/profile"}>
              <img
                alt="back arrow icon"
                className="backarrow"
                src={backarrow}
              />
            </Link>
          </div>
          <div className="col s3 m3 l3">
            {/* <button  className = "edit-btn" onClick={() => deleteBucketHandler(bucket)}> */}
            {/* <button  className = "edit-btn" >
              Delete Bucket
            </button> */}
            <Modal />
          </div>
        </div>
        {bucket?.images !== [] ? (
          bucket?.images?.map((image, imageIndex) => {
            return (
              <div
                key={`Key${imageIndex}`}
                className="col s6 m6 l6 bucket-image"
              >
                <img
                  className="bucket-teaser_image"
                  alt="images in the bucket"
                  src={image.image_uri}
                />
                <button
                  className="remove-collection"
                  onClick={() => deleteBucketImageHandler(image)}
                >
                  Remove from bucket
                </button>
              </div>
            );
          })
        ) : (
          <p>Add some images to your bucket!</p>
        )}
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    currentBucket: state.bucket.currentBucket,
    buckets: state.bucket.buckets,
    uid: state.session.authUser.uid,
    profile: state.profile.user,
    collection: state.collection.collection,
  };
};

const mapDispatchToProps = {
  getProfile: ProfileThunks.getProfile,
  getCollection: CollectionThunks.getCollectionByUserId,
  getBuckets: BucketThunks.getBucketsAsync,
  deleteBucketImage: BucketThunks.deleteBucketImage,
  deleteBucket: BucketThunks.deleteBucket,
};

const condition = (authUser) => !!authUser;

export default compose(
  withAuthorization(condition),
  connect(mapStateToProps, mapDispatchToProps)
)(SingleBucketView);
