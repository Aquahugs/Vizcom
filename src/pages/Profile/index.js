import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import { withAuthorization } from "../../router/auth/session";
import { Link } from "react-router-dom";
import Modal from "react-modal";

import ProfileThunks from "./redux/thunks";
import CollectionThunks from "./Collection/redux/thunks";
import { EDITOR, GENERATE } from "../../router/routes-const";

import "./profile.scss";
import locationIcon from "../../assets/location-icon.svg";
import instaIcon from "../../assets/instagram.png";
import twitterIcon from "../../assets/twitter.png";
import {
  Desktop,
  Tablet,
  Mobile,
} from "../../common/components/Responsive/Responsive";
import RenderSmoothImage from "render-smooth-image-react";
import "render-smooth-image-react/build/style.css";
import { Popover, Button } from "antd";

const Profile = ({
  uid,
  profile,
  collection,
  getProfile,
  getCollection,
  deleteCollectionImage,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [editPopoverIsOpen, setEditPopoverIsOpen] = useState(true);

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

  useEffect(() => {
    if (!profile) {
      getProfile(uid);
    }
    if (!collection) {
      getCollection(uid);
    }
  }, []);

  const deleteCollectionImageHandler = (collectionImageId) => {
    const req = {
      collectionImageId,
      uuid: uid,
    };
    deleteCollectionImage(req);
    closeModal();
  };

  return (
    <div className="profile-container">
      <Desktop>
        <div className="row">
          <div className="profile-row-no-padding col sm12 m12 l12">
            <div className="row bio-header">
              <Link to={EDITOR}>
                <button className=" btn btn-flat edit-btn ">
                  Edit Profile
                </button>
              </Link>{" "}
              {profile && profile?.first_name ? (
                <h1>{profile.first_name}</h1>
              ) : (
                <h1>Your Name</h1>
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
        </div>

        {collection ? (
          <div className="row">
            {collection?.map((image) => {
              return (
                <div
                  className="hvr-bob collection-container col s3 m3 l3"
                  key={image.collection_image_id}
                  onClick={() => {
                    openModal(image);
                  }}
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
            <p>
              <Link to={GENERATE}>Add</Link> images to your collection
            </p>
          </div>
        )}

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
              </div>
            </span>
          </Modal>
        </div>
      </Desktop>
      <Tablet>
        <div className="row">
          <div className="profile-row-no-padding col sm12 m12 l12">
            <div className="row bio-header">
              <Link to={EDITOR}>
                <button className=" btn btn-flat edit-btn ">
                  Edit Profile
                </button>
              </Link>
              {profile && profile?.first_name ? (
                <h1>{profile.first_name}</h1>
              ) : (
                <h1>Your Name</h1>
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
        </div>
        {collection && (
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
              </div>
            </span>
          </Modal>
        </div>
      </Tablet>
      <Mobile>
        <div className="row">
          <div className="profile-row-no-padding col s12 m12 l12">
            <div className=" row bio-header-mobile">
              <Link to={EDITOR}>
                <button className=" btn btn-flat edit-btn">Edit Profile</button>
              </Link>
              {profile?.first_name ? (
                <h1>{profile.first_name}</h1>
              ) : (
                <h1>Your Name</h1>
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
        </div>

        {collection && (
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
              </div>
            </span>
          </Modal>
        </div>
      </Mobile>
    </div>
  );
};

const mapDispatchToProps = {
  getProfile: ProfileThunks.getProfile,
  getCollection: CollectionThunks.getCollectionByUserId,
  deleteCollectionImage: CollectionThunks.deleteCollectionImage,
};

const mapStateToProps = (state) => {
  return {
    uid: state.session.authUser.uid,
    profile: state.profile.user,
    collection: state.collection.collection,
  };
};

const condition = (authUser) => !!authUser;

export default compose(
  withAuthorization(condition),
  connect(mapStateToProps, mapDispatchToProps)
)(Profile);
