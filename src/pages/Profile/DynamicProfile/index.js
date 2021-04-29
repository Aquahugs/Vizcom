import React, { useState, useEffect } from "react";
import { compose } from "recompose";
import { withAuthorization } from "../../../router/auth/session";
import { Link } from "react-router-dom";

import "../profile.scss";
import "../../Bucket/BucketList/BucketList.scss";
import locationIcon from "../../../assets/location-icon.svg";
import instaIcon from "../../../assets/instagram.png";
import twitterIcon from "../../../assets/twitter.png";
import {
  Desktop,
  Tablet,
  Mobile,
} from "../../../common/components/Responsive/Responsive";
import RenderSmoothImage from "render-smooth-image-react";
import "render-smooth-image-react/build/style.css";

import userService from "../../../common/services/user-service";
import collectionService from "../../../common/services/collection-service";
import bucketService from "../../../common/services/bucket-service";

const DynamicProfile = ({ match }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [view, setView] = useState("collection");

  const [buckets, setBuckets] = useState(null);
  const [profile, setProfile] = useState(null);
  const [collection, setCollection] = useState(null);

  useEffect(() => {
    getUserInfo().then(setIsLoaded(true));
  }, []);

  const toggleView = (e) => {
    setView(e);
  };

  const getUserInfo = async () => {
    const { params } = match;
    const profileResponse = await userService.getUserById(params.uid);
    setProfile(profileResponse.data);

    const collectionResponse = await collectionService.getCollectionByUserId(
      params.uid
    );
    setCollection(collectionResponse.data);

    const bucketResponse = await bucketService.getBuckets(params.uid);
    setBuckets(bucketResponse.data);
  };

  if (!isLoaded && profile && collection && buckets) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  } else {
    return (
      <div>
        <Desktop>
          <div className="profile-container">
            <div className="row">
              <div className="col sm6 m6 l6">
                <div className="row bio-header">
                  {profile && profile?.first_name ? (
                    <h2>{profile.first_name}</h2>
                  ) : (
                    <h2>Your Name</h2>
                  )}
                </div>

                <div className="row">
                  <div className="col s6 m6 l6 location-container">
                    <img
                      alt="location icon"
                      className="location-icon"
                      src={locationIcon}
                    />
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
                        <img alt="insta icon" src={instaIcon} />
                      </a>
                    )}
                    {profile && (
                      <a
                        href={profile.twitter}
                        target="_blank"
                        rel="noreferrer"
                        className="logo-container"
                      >
                        <img alt="twitter icon" src={twitterIcon} />
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
                    <li
                      onClick={() => toggleView("collection")}
                      style={{
                        fontWeight: view === "collection" ? "bold" : "400",
                      }}
                    >
                      Collection
                    </li>
                  </a>
                  <a>
                    <li
                      onClick={() => toggleView("bucket")}
                      style={{ fontWeight: view === "bucket" ? "bold" : "400" }}
                    >
                      Buckets
                    </li>
                  </a>
                </ul>
              </div>
            </div>
            {view === "bucket" && (
              <div className="buckets-container">
                <div className="row">
                  {buckets?.map((bucket, bucketIndex) => {
                    return (
                      <div className="row" key={`Key${bucketIndex}`}>
                        <Link to={`/bucket/${bucket.bucket_id}`}>
                          <div className="bucket-titlecard">
                            {/* Bucket title card */}
                            <h3>{bucket?.bucket_name}</h3>
                            <p>by / {profile?.first_name}</p>
                            <p>
                              {bucket?.images ? bucket.images.length : 0} images
                            </p>
                          </div>
                        </Link>
                        {bucket.images?.length !== 0 ? (
                          bucket.images.length > 3 ? (
                            bucket.images
                              .slice(0, 2)
                              .map((image, imageIndex) => {
                                return (
                                  <div key={`Key${imageIndex}`}>
                                    <img
                                      className="bucket-teaser_image col s3 m3 l3 "
                                      alt="images in the bucket"
                                      src={image.image_uri}
                                    />
                                  </div>
                                );
                              })
                          ) : (
                            bucket.images?.map((image, imageIndex) => {
                              return (
                                <div key={`Key${imageIndex}`}>
                                  <img
                                    className="col s3 m3 l3 bucket-preview"
                                    alt="images in the bucket"
                                    src={image.image_uri}
                                  />
                                </div>
                              );
                            })
                          )
                        ) : (
                          <div className="bucket-teaser_add-image-card">
                            <p>Empty bucket</p>
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
              </div>
            )}

            {view === "collection" &&
              (collection ? (
                <div className="row">
                  {collection?.map((image) => {
                    return (
                      <div
                        className=" collection-container col s3 m3 l3"
                        key={image.collection_image_id}
                      >
                        <RenderSmoothImage
                          src={image.image_uri}
                          alt="images in the collection"
                          className="collection-image"
                        />
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div>
                  <p>No images here!</p>
                </div>
              ))}
          </div>
        </Desktop>
        <Tablet>
          <div className="profile-container">
            <div className="row">
              <div className="col sm6 m6 l6">
                <div className="row bio-header">
                  {profile && profile?.first_name ? (
                    <h2>{profile.first_name}</h2>
                  ) : (
                    <h2>Your Name</h2>
                  )}
                </div>

                <div className="row">
                  <div className="col s6 m6 l6 location-container">
                    <img
                      alt="location icon"
                      className="location-icon"
                      src={locationIcon}
                    />
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
                        <img alt="insta icon" src={instaIcon} />
                      </a>
                    )}
                    {profile && (
                      <a
                        href={profile.twitter}
                        target="_blank"
                        rel="noreferrer"
                        className="logo-container"
                      >
                        <img alt="twitter icon" src={twitterIcon} />
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
                    <li
                      onClick={() => toggleView("collection")}
                      style={{
                        fontWeight: view == "collection" ? "bold" : "400",
                      }}
                    >
                      Collection
                    </li>
                  </a>
                  <a>
                    <li
                      onClick={() => toggleView("bucket")}
                      style={{ fontWeight: view === "bucket" ? "bold" : "400" }}
                    >
                      Buckets
                    </li>
                  </a>
                </ul>
              </div>
            </div>
            {view === "bucket" && (
              <div className="buckets-container">
                <div className="row">
                  {buckets?.map((bucket, bucketIndex) => {
                    return (
                      <div className="row" key={`Key${bucketIndex}`}>
                        <Link to={`/bucket/${bucket.bucket_id}`}>
                          <div className="bucket-titlecard">
                            {/* Bucket title card */}
                            <h3>{bucket?.bucket_name}</h3>
                            <p>by / {profile?.first_name}</p>
                            <p>
                              {bucket?.images ? bucket.images.length : 0} images
                            </p>
                          </div>
                        </Link>
                        {bucket.images?.length !== 0 ? (
                          bucket.images.length > 3 ? (
                            bucket.images
                              .slice(0, 2)
                              .map((image, imageIndex) => {
                                return (
                                  <div key={`Key${imageIndex}`}>
                                    <img
                                      className="bucket-teaser_image col s3 m3 l3 "
                                      alt="images in the bucket"
                                      src={image.image_uri}
                                    />
                                  </div>
                                );
                              })
                          ) : (
                            bucket.images?.map((image, imageIndex) => {
                              return (
                                <div key={`Key${imageIndex}`}>
                                  <img
                                    className="col s3 m3 l3 bucket-preview"
                                    alt="images in the bucket"
                                    src={image.image_uri}
                                  />
                                </div>
                              );
                            })
                          )
                        ) : (
                          <div className="bucket-teaser_add-image-card">
                            <p>Empty bucket</p>
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
              </div>
            )}

            {view === "collection" && collection && (
              <div className="row">
                {/* CREATE COLLECTION LIST COMPONENT */}
                {collection?.map((image) => {
                  return (
                    //post tags
                    <div
                      className=" collection-container col s3 m3 l3"
                      key={image.collection_image_id}
                    >
                      <RenderSmoothImage
                        src={image.image_uri}
                        alt="images in the collection"
                        className="collection-image"
                      />
                    </div>
                  );
                })}
              </div>
            )}

            {/* Pop up modal */}
          </div>
        </Tablet>
        <Mobile>
          <div className="mobile-profile-container">
            <div className="row">
              <div className="col s12 m12 l12">
                <div className="row bio-header-mobile">
                  {profile?.first_name ? (
                    <h2>{profile.first_name}</h2>
                  ) : (
                    <h2>Your Name</h2>
                  )}
                </div>

                <div className="row">
                  <div className="col s12 m12 l12 location-container">
                    <img
                      alt="location icon"
                      className="location-icon"
                      src={locationIcon}
                    />
                    {profile && <p>{profile.location}</p>}
                    <div className="col s8 m8 l8 social-icons">
                      {profile && (
                        <a
                          href={profile.instagram}
                          target="_blank"
                          rel="noreferrer"
                          className="logo-container"
                        >
                          <img alt="insta icon" src={instaIcon} />
                        </a>
                      )}
                      {profile && (
                        <a
                          href={profile.twitter}
                          target="_blank"
                          rel="noreferrer"
                          className="logo-container"
                        >
                          <img alt="twitter icon" src={twitterIcon} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                {profile && <p>{profile.bio}</p>}
              </div>
              <div className="row">
                <div className="view-selector-mobile col s12 m12 l12">
                  <ul>
                    <a>
                      <li
                        onClick={() => toggleView("collection")}
                        style={{
                          fontWeight: view === "collection" ? "bold" : "400",
                        }}
                      >
                        Collection
                      </li>
                    </a>
                    <a>
                      <li
                        onClick={() => toggleView("bucket")}
                        style={{
                          fontWeight: view === "bucket" ? "bold" : "400",
                        }}
                      >
                        Buckets
                      </li>
                    </a>
                  </ul>
                </div>
              </div>
            </div>
            {view === "bucket" && (
              <div className="buckets-container">
                <div className="row">
                  {buckets?.map((bucket, bucketIndex) => {
                    return (
                      <div className="row" key={`Key${bucketIndex}`}>
                        <Link to={`/bucket/${bucket.bucket_id}`}>
                          <div className="bucket-titlecard">
                            {/* Bucket title card */}
                            <h3>{bucket?.bucket_name}</h3>
                            <p>by / {profile?.first_name}</p>
                            <p>
                              {bucket?.images ? bucket.images.length : 0} images
                            </p>
                          </div>
                        </Link>
                        {bucket.images?.length !== 0 ? (
                          bucket.images.length > 3 ? (
                            bucket.images
                              .slice(0, 2)
                              .map((image, imageIndex) => {
                                return (
                                  <div key={`Key${imageIndex}`}>
                                    <img
                                      className="bucket-teaser_image col s3 m3 l3 "
                                      alt="images in the bucket"
                                      src={image.image_uri}
                                    />
                                  </div>
                                );
                              })
                          ) : (
                            bucket.images?.map((image, imageIndex) => {
                              return (
                                <div key={`Key${imageIndex}`}>
                                  <img
                                    className="col s3 m3 l3 bucket-preview"
                                    alt="images in the bucket"
                                    src={image.image_uri}
                                  />
                                </div>
                              );
                            })
                          )
                        ) : (
                          <div className="bucket-teaser_add-image-card">
                            <p>Empty bucket</p>
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
              </div>
            )}

            {view === "collection" && collection && (
              <div className="row">
                {/* CREATE COLLECTION LIST COMPONENT */}
                {collection?.map((image) => {
                  return (
                    //post tags
                    <div
                      className=" collection-container col s12 m12 l12"
                      key={image.collection_image_id}
                    >
                      <RenderSmoothImage
                        src={image.image_uri}
                        alt="images in the collection"
                        className="collection-image"
                      />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </Mobile>
      </div>
    );
  }
};

const condition = (authUser) => !!authUser;

export default compose(withAuthorization(condition))(DynamicProfile);
