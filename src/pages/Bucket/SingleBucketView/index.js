import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import { Link } from "react-router-dom";
import { withAuthorization } from "../../../router/auth/session";

import "./singlebucketview.scss";
import backarrow from "../../../assets/back-arrow.svg";
import pencilIcon from "../../../assets/pencil.png";

import { Modal, Button } from "react-materialize";
import UpdateBucketModal from "../UpdateBucketModal";

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
    if (!buckets) {
      getBuckets(uid).then(() => {
        setBucket(
          buckets?.find(
            (bucket) => bucket.bucket_id === parseInt(params.bucket_id)
          )
        );
      });
    } else {
      setBucket(
        buckets?.find(
          (bucket) => bucket.bucket_id === parseInt(params.bucket_id)
        )
      );
    }
  }, [buckets]);

  useEffect(() => {
    const { params } = match;

    setBucket(
      buckets?.find((bucket) => bucket.bucket_id === parseInt(params.bucket_id))
    );
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

  const trigger = <Button className="delete-btn ">Delete Bucket</Button>;
  const updateModalTrigger = (
    <img className="clickable-icon" src={pencilIcon}></img>
  );

  if (!bucket) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  } else {
    return (
      <div className="view-container row">
        <div className="row top-items">
          <h1>{bucket.bucket_name}</h1>
          <UpdateBucketModal bucket={bucket} trigger={updateModalTrigger} />
        </div>

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
            <Modal
              actions={[
                <Button
                  className="delete-bucket-btn"
                  flat
                  modal="close"
                  node="button"
                  waves="red"
                  onClick={() => deleteBucketHandler(bucket)}
                >
                  Delete
                </Button>,
                <Button flat modal="close" node="button" waves="light">
                  Cancel
                </Button>,
              ]}
              options={{
                dismissible: true,
                endingTop: "10%",
                inDuration: 250,
                opacity: 0.5,
                outDuration: 250,
                preventScrolling: true,
                startingTop: "4%",
              }}
              header="Are you sure you want to delete this bucket?"
              trigger={trigger}
            ></Modal>
          </div>
        </div>
        {bucket?.images ? (
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
