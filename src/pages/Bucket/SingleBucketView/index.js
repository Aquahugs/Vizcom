import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import { Link } from "react-router-dom";
import { withAuthorization } from "../../../router/auth/session";
import "./singlebucketview.scss";
import backarrow from "../../../assets/back-arrow.svg";
const SingleBucketView = ({ currentBucket }) => {
  if (!currentBucket) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  } else {
    return (
      <div className="view-container row">
        <h1>{currentBucket.bucket_name}</h1>
        <div className="row">
          <Link to={"profile"}>
            <img className="backarrow" src={backarrow} />
          </Link>
        </div>
        {currentBucket?.images?.map((image, imageIndex) => {
          return (
            <div className="col s6 m6 l6 bucket-image">
              <img
                className="bucket-teaser_image  "
                alt="images in the bucket"
                key={`Key${imageIndex}`}
                src={image.image_uri}
              />
            </div>
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
