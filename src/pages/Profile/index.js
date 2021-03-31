import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import { withAuthorization } from "../../router/auth/session";
import { Link } from "react-router-dom";
import Modal from "react-modal";

import ProfileThunks from "./redux/thunks";
import CollectionThunks from "./Collection/redux/thunks";
import BucketThunks from "../Bucket/redux/thunks";
import AddToBucket from "../Home/Generate/AddToBucket";
import { EDITOR, ADD_BUCKET, GENERATE } from "../../router/routes-const";
import { BucketActions } from "../Bucket/redux";

import "./profile.scss";
import locationIcon from "../../assets/location-icon.svg";
import instaIcon from "../../assets/instagram.png";
import twitterIcon from "../../assets/twitter.png";
import plus from "../../assets/plus.png";
import AddImageIcon from "../../assets/add-image.svg";
import {
  Desktop,
  Tablet,
  Mobile,
} from "../../common/components/Responsive/Responsive";
import { MobileProfile } from "./Responsive/MobileProfile";

const Profile = ({
  uid,
  profile,
  MobileProfile,
  collection,
  buckets,
  getProfile,
  getCollection,
  getBuckets,
  getBucketDropdownOptions,
  bucketDropdownOptions,
  deleteCollectionImage,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [view, setView] = useState("collection");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [displayBuckets, setDisplayBuckets] = useState(false);

  // modal functions
  const openModal = (image) => {
    setModalImage(image);
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  const modalStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "80%",
      height: "auto",
    },
  };

  const showBuckets = {
    visibility: displayBuckets ? "visible" : "hidden",
    display: displayBuckets ? "block" : "none",
  };
  const hideBuckets = {
    visibility: displayBuckets ? "hidden" : "visible",
    display: displayBuckets ? "none" : "block",
  };

  useEffect(() => {
    if (!profile) {
      getProfile(uid);
    }
    if (!collection) {
      getCollection(uid);
    }
    getBuckets(uid);
    setIsLoaded(true);
    // options for bucket search
    const bucketOptionDropdown = buckets?.map((bucket) => ({
      name: bucket.bucket_name,
      value: bucket.bucket_id,
    }));
    getBucketDropdownOptions(bucketOptionDropdown);
  }, [profile, collection, buckets]);

  const toggleView = (e) => {
    setView(e);
  };

  const toggleBuckets = () => {
    setDisplayBuckets(!displayBuckets);
  };

  const deleteCollectionImageHandler = (collectionImageId) => {
    const req = {
      collectionImageId,
      uuid: uid,
    };
    deleteCollectionImage(req);
    closeModal();
  };

  if (!isLoaded && profile) {
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
                  <Link to={EDITOR}>
                    <button className=" btn btn-flat edit-btn ">
                      Edit profile
                    </button>
                  </Link>
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
                <div className="row create-box">
                  {/* CREATE BUCKET LIST COMPONENT */}
                  <Link to={ADD_BUCKET}>
                    <div className="row bucketbtn-container">
                      <div className="col s12 m12 l12">
                        <button className=" btn btn-flat create-btn ">
                          <img alt="plus icon" src={plus} />
                          <br />
                          Create new bucket
                        </button>
                      </div>
                    </div>
                  </Link>
                </div>

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
                                  <div>
                                    <img
                                      className="bucket-teaser_image col s3 m3 l3 "
                                      alt="images in the bucket"
                                      key={`Key${imageIndex}`}
                                      src={image.image_uri}
                                    />
                                  </div>
                                );
                              })
                          ) : (
                            bucket.images?.map((image, imageIndex) => {
                              return (
                                <div>
                                  <img
                                    className="col s3 m3 l3 bucket-preview"
                                    alt="images in the bucket"
                                    key={`Key${imageIndex}`}
                                    src={image.image_uri}
                                  />
                                </div>
                              );
                            })
                          )
                        ) : (
                          <div className="bucket-teaser_add-image-card">
                            <Link to={GENERATE}>
                              <img
                                className="add-image"
                                alt="images in the bucket"
                                src={AddImageIcon}
                              />
                            </Link>
                            <p>add images</p>
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
                {collection.map((image) => {
                  return (
                    //post tags
                    <div
                      className=" collection-container col s3 m3 l3"
                      key={image.collection_image_id}
                    >
                      <img
                        alt="collect icon"
                        className="collection-image"
                        src={image.image_uri}
                        onClick={() => {
                          openModal(image);
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            )}

            {/* Pop up modal */}
            <div>
              <Modal
                ariaHideApp={false}
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={modalStyles}
                contentLabel="Example Modal"
                onAfterClose={closeModal}
              >
                <span className="modal-container">
                  <div className="row">
                    <div className="col s7 m7 l7">
                      <img
                        alt="car"
                        className="modal-image"
                        src={modalImage.image_uri}
                      />
                    </div>
                    <div className="button-container  col s5 m5 l5">
                      <div style={hideBuckets}>
                        <div>
                          <button
                            className="waves-effect waves-grey btn-flat add-bucket"
                            onClick={toggleBuckets}
                          >
                            <i className="material-icons right">apps</i>Add to
                            bucket
                          </button>
                        </div>
                        <p
                          className="remove"
                          onClick={() =>
                            deleteCollectionImageHandler(
                              modalImage.collection_image_id
                            )
                          }
                        >
                          Remove from collection
                        </p>
                      </div>
                      <div
                        className="bucket-container col s12 m12 l12"
                        style={showBuckets}
                      >
                        <AddToBucket
                          addBucketMenu={setDisplayBuckets}
                          image={modalImage}
                        />
                      </div>
                    </div>
                  </div>
                </span>
              </Modal>
            </div>
          </div>
        </Desktop>
        <Tablet>Tablet</Tablet>
        <Mobile>
          <div className="mobile-profile-container">
            <div className="row">
              <div className="col s12 m12 l12">
                <div className="row bio-header-mobile">
                  <Link to={EDITOR}>
                    <button className=" btn btn-flat edit-btn">
                      Edit profile
                    </button>
                  </Link>
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
                <div className="row create-box">
                  {/* CREATE BUCKET LIST COMPONENT */}
                  <Link to={ADD_BUCKET}>
                    <div className="row bucketbtn-container">
                      <div className="col s12 m12 l12">
                        <button className=" btn btn-flat create-btn ">
                          <img src={plus} />
                          <br />
                          Create new bucket
                        </button>
                      </div>
                    </div>
                  </Link>
                </div>

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
                                  <div>
                                    <img
                                      className="bucket-teaser_image col s3 m3 l3 "
                                      alt="images in the bucket"
                                      key={`Key${imageIndex}`}
                                      src={image.image_uri}
                                    />
                                  </div>
                                );
                              })
                          ) : (
                            bucket.images?.map((image, imageIndex) => {
                              return (
                                <div>
                                  <img
                                    className="col s3 m3 l3 bucket-preview"
                                    alt="images in the bucket"
                                    key={`Key${imageIndex}`}
                                    src={image.image_uri}
                                  />
                                </div>
                              );
                            })
                          )
                        ) : (
                          <div className="bucket-teaser_add-image-card">
                            <Link to={GENERATE}>
                              <img
                                className="add-image"
                                alt="images in the bucket"
                                src={AddImageIcon}
                              />
                            </Link>
                            <p>add images</p>
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
                {collection.map((image) => {
                  return (
                    //post tags
                    <div
                      className=" collection-container col s12 m12 l12"
                      key={image.collection_image_id}
                    >
                      <img
                        alt="images in the collection"
                        className="collection-image"
                        src={image.image_uri}
                        onClick={() => {
                          openModal(image);
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            )}

            {/* Pop up modal */}
            <div>
              <Modal
                ariaHideApp={false}
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={modalStyles}
                contentLabel="Example Modal"
                onAfterClose={closeModal}
              >
                <span className="modal-container">
                  <div className="row">
                    <div className="col s12 m12 l12">
                      <img className="modal-image" src={modalImage.image_uri} />
                    </div>
                    <div className="button-container  col s12 m12 l12">
                      <div style={hideBuckets}>
                        <div>
                          <button
                            className="waves-effect waves-grey btn-flat add-bucket-mobile"
                            onClick={toggleBuckets}
                          >
                            <i className="material-icons right">apps</i>Add to
                            bucket
                          </button>
                        </div>
                        <p
                          className="remove"
                          onClick={() =>
                            deleteCollectionImageHandler(
                              modalImage.collection_image_id
                            )
                          }
                        >
                          Remove from collection
                        </p>
                      </div>
                      <div
                        className="bucket-container col s12 m12 l12"
                        style={showBuckets}
                      >
                        <AddToBucket
                          addBucketMenu={setDisplayBuckets}
                          image={modalImage}
                        />
                      </div>
                    </div>
                  </div>
                </span>
              </Modal>
            </div>
          </div>
        </Mobile>
      </div>
    );
  }
};

const mapDispatchToProps = {
  getProfile: ProfileThunks.getProfile,
  getCollection: CollectionThunks.getCollectionByUserId,
  getBuckets: BucketThunks.getBuckets,
  getBucketDropdownOptions: BucketActions.getBucketDropdownOptions,
  deleteCollectionImage: CollectionThunks.deleteCollectionImage,
};

const mapStateToProps = (state) => {
  return {
    uid: state.session.authUser.uid,
    profile: state.profile.user,
    collection: state.collection.collection,
    buckets: state.bucket.buckets,
    bucketDropdownOptions: state.bucket.dropdownOptions,
  };
};

const condition = (authUser) => !!authUser;

export default compose(
  withAuthorization(condition),
  connect(mapStateToProps, mapDispatchToProps)
)(Profile);
