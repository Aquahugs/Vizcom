import React, { useState } from "react";
import { Link } from "react-router-dom";

import { GENERATE } from "../../../router/routes-const";

import "./BucketList.scss";
import AddImageIcon from "../../../assets/add-image.svg";

const BucketList = ({ buckets, user }) => {
  return (
    <div className="bucket-teaser_container">
      {buckets?.map((bucket, bucketIndex) => {
        return (
          <div className="bucket-teaser_row" key={`Key${bucketIndex}`}>
            <div className="bucket-teaser_cover-card">
              <h3>{bucket?.bucket_name}</h3>
              <p>by / {user?.first_name}</p>
              <p>{bucket?.images ? bucket.images.length : 0} images</p>
            </div>
            {bucket.images?.length !== 0 ? (
              bucket.images.length > 3 ? (
                bucket.images.slice(0, 2).map((image, imageIndex) => {
                  return (
                    <img
                      className="bucket-teaser_image"
                      alt="images in the bucket"
                      key={`Key${imageIndex}`}
                      src={image.image_uri}
                    />
                  );
                })
              ) : (
                bucket.images?.map((image, imageIndex) => {
                  return (
                    <img
                      className="bucket-teaser_image"
                      alt="images in the bucket"
                      key={`Key${imageIndex}`}
                      src={image.image_uri}
                    />
                  );
                })
              )
            ) : (
              <div className="bucket-teaser_add-image-card">
                <img
                  className="bucket-teaser_image"
                  alt="images in the bucket"
                  src={AddImageIcon}
                />
                <p>add images to bucket </p>
                <Link to={GENERATE}>
                  <p>or collect from the generate tool</p>
                </Link>
              </div>
            )}
            {bucket.images?.length > 2 && (
              <div className="bucket_teaser_see-more-container">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default BucketList;
