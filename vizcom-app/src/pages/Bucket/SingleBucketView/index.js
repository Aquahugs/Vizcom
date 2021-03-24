import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import { withAuthorization } from "../../../router/auth/session";

const SingleBucketView = ({ currentBucket }) => {
  useEffect(() => {});

  if (!currentBucket) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  } else {
    return (
      <div>
        {currentBucket.bucket_name}
        {currentBucket?.images?.map((image, imageIndex) => {
          return (
            <img
              className="bucket-teaser_image col s3 m3 l3 "
              alt="images in the bucket"
              key={`Key${imageIndex}`}
              src={image.image_uri}
            />
          );
        })}
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    currentBucket: state.bucket.currentBucket,
  };
};
const condition = (authUser) => !!authUser;

export default compose(
  withAuthorization(condition),
  connect(mapStateToProps)
)(SingleBucketView);
