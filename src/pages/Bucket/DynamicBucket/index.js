import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import { Link } from "react-router-dom";
import { withAuthorization } from "../../../router/auth/session";

import "../SingleBucketView/singlebucketview.scss";
import backarrow from "../../../assets/back-arrow.svg";

import userService from "../../../common/services/user-service";
import bucketService from "../../../common/services/bucket-service";

const SingleBucketView = ({ match }) => {
  const [bucket, setBucket] = useState(null);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const { params } = match;
    getProfileAsync(params.uid);
    getBucketAsync(params.bucket_id);
  }, []);

  const getBucketAsync = async (bucket_id) => {
    try {
      const response = await bucketService.getBucket(bucket_id);
      setBucket(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  const getProfileAsync = async (uid) => {
    try {
      const response = await userService.getUserById(uid);
      setProfile(response.data);
    } catch (e) {
      console.log(e);
    }
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
        <h1>{bucket[0]?.bucket_name}</h1>
        {bucket[0]?.description && <h4>{bucket.description}</h4>}
        <h4>
          By:{" "}
          {profile?.first_name ? profile?.first_name : profile?.display_name}
        </h4>
        <div className="row top-items">
          <div className="col s9 m9 l9">
            <Link to={"/explore"}>
              <img
                alt="back arrow icon"
                className="backarrow"
                src={backarrow}
              />
            </Link>
          </div>
        </div>
        {bucket ? (
          bucket?.map((image, imageIndex) => {
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
              </div>
            );
          })
        ) : (
          <p>There are no images in this bucket yet!</p>
        )}
      </div>
    );
  }
};

const condition = (authUser) => !!authUser;

export default compose(withAuthorization(condition))(SingleBucketView);
