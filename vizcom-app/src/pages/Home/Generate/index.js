import React, { useState, useEffect } from "react";

import { compose } from "recompose";
import { connect } from "react-redux";
import { fadeInUp } from "react-animations";
import Popup from "reactjs-popup";
import Radium, { StyleRoot } from "radium";
import "./generate.scss";
import "./add-to-bucket.scss";
import Modal from "react-modal";

import { CollectionThunks } from "../../Profile/Collection/redux";
import { BucketThunks, BucketActions } from "../../Bucket/redux";
import { GenerateThunks } from "./redux";

import { withAuthorization } from "../../../router/auth/session";

import downloadbutton from "../../../assets/download-button.svg";
import AddToBucket from "./AddToBucket";

const Generate = ({
  collection,
  buckets,
  uid,
  getCollection,
  getBuckets,
  getBucketDropdownOptions,
  generatedImages,
  collectImage,
  getGeneratedImages,
  bucketDropdownOptions,
}) => {
  // Local state
  const [isLoaded, setIsLoaded] = useState(false);
  const [displayBuckets, setDisplayBuckets] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedDisplayImages, setGeneratedDisplayImages] = useState([]);
  const [imageDownload, setImageDownload] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [isCollected, setIsCollected] = useState(null);

  useEffect(() => {
    !generatedImages
      ? fetchGeneratedImages()
      : toggleGeneratedImages(generatedImages, 3);

    getCollection(uid);
    getBuckets(uid);

    // options for bucket search
    if (!bucketDropdownOptions) {
      const bucketOptionDropdown = buckets?.map((bucket) => ({
        name: bucket.bucket_name,
        value: bucket.bucket_id,
      }));
      getBucketDropdownOptions(bucketOptionDropdown);
    }

    setIsLoaded(true);
  }, []);

  const styles = {
    fadeInUp: {
      animation: "x 1.2s",
      animationName: Radium.keyframes(fadeInUp, "fadeInUp"),
    },
  };

  async function fetchGeneratedImages() {
    try {
      const response = await getGeneratedImages();
      if (response) {
        toggleGeneratedImages(generatedImages, 3);
      }
    } catch (e) {
      console.log(e);
    }
  }

  const toggleGeneratedImages = (arr, n) => {
    setIsGenerating(true);
    let result = new Array(n),
      len = arr?.length,
      taken = new Array(len);
    if (n > len)
      throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
      let x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
    }
    setGeneratedDisplayImages(result);

    setTimeout(() => {
      setIsGenerating(false);
    }, 800);
  };

  const toggleBuckets = () => {
    setDisplayBuckets(!displayBuckets);
  };

  const handleClick = (e) => {
    if (e) {
      e.preventDefault();
    }
  };

  const collectImageHandler = (image) => {
    console.log(image);
    const imageObj = {
      uuid: uid,
      generated_image_id: image.generated_image_id,
      user_uploaded_image_id: null,
      image_uri: image.image_uri,
    };
    setIsCollected(imageObj.generated_image_id);
    collectImage(imageObj);
    console.log("images are collected", isCollected);
  };

  const logDownload = (image) => {
    setImageDownload(image);
  };

  // modal functions
  const openModal = (image) => {
    setModalImage(image);
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
    setDisplayBuckets(false);
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
      height: "600px",
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

  const visibilityStyle = {
    visibility: isGenerating ? "hidden" : "visible",
    display: isGenerating ? "none" : "block",
  };
  const hiddenStyle = {
    visibility: isGenerating ? "visible" : "hidden",
    display: isGenerating ? "block" : "none",
    marginLeft: "auto",
    marginRight: "auto",
    width: "40%",
  };

  if (!isLoaded) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  const images = generatedDisplayImages?.map((image, imageIndex) => {
    return (
      <div className="col s4 m4 l4" key={`Key${imageIndex}`}>
        <img
          alt="ai generated"
          className="generated-image"
          src={image.image_uri}
          onClick={() => {
            openModal(image);
          }}
        />
        <div className="row save-buttons">
          <a href={image.image_uri} download>
            <img
              alt="ai generated"
              className="download-button"
              src={downloadbutton}
              onClick={() => logDownload(image.image_uri)}
            />
          </a>
          <a className="collect" onClick={() => collectImageHandler(image)}>
            Collect
            <i className="material-icons right">add_box</i>
          </a>
        </div>
      </div>
    );
  });

  const modal = (
    <div>
      {modalImage && (
        <Modal
          ariaHideApp={false}
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={modalStyles}
          contentLabel="Example Modal"
          onAfterClose={closeModal}
        >
          <span>
            {/* Pop up modal */}
            <div className="row">
              <div className="col s7 m7 l7">
                <img
                  alt="ai generated"
                  className="generated-imagemodal"
                  src={modalImage.image_uri}
                  style={visibilityStyle}
                />
              </div>
              <div className="col s5 m5 l5 generated-info">
                <h1 style={{ fontSize: "2rem" }}>
                  {" "}
                  {modalImage.image_uri.slice(-22, -1)}g
                </h1>
                <div className="button-container row">
                  <div style={hideBuckets}>
                    <div>
                      <div className="col s6 m6 l6">
                        <button
                          className="waves-effect waves-grey btn-flat add-bucket"
                          onClick={toggleBuckets}
                        >
                          <i className="material-icons right">apps</i>Add to
                          bucket
                        </button>
                      </div>
                      <div className="col s6 m6 l6">
                        <a
                          className="collect"
                          onClick={() => collectImageHandler(modalImage)}
                        >
                          Collect
                          <i className="material-icons right">add_box</i>
                        </a>
                      </div>
                    </div>
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
            </div>
          </span>
        </Modal>
      )}
    </div>
  );

  return (
    <div>
      {modal}
      <div className="row generate-container">
        <div className="row tag">
          <p>
            Every click uses artificial intelligence to generate unique images{" "}
          </p>
        </div>
        <StyleRoot>
          <div className="row" style={visibilityStyle}>
            {images}
          </div>

          <div className="row generated-container" style={styles.fadeInUp}>
            <img //LOAD ANIMATION
              alt="loading animation"
              src="https://firebasestorage.googleapis.com/v0/b/designerspen-95f24.appspot.com/o/New%20LoadingGenereate%20.gif?alt=media&token=93ba0e96-24af-43a3-8463-650337660f01"
              style={hiddenStyle}
            />
          </div>

          <div className=" genbtn-container row" style={styles.fadeInUp}>
            <button
              a
              href="#"
              className="btn waves-effect generate-btn lighten-1 z-depth-0"
              onClick={() => toggleGeneratedImages(generatedImages, 3)}
              onMouseDown={() => handleClick}
              onKeyUp={(e) => {
                if (e.keyIdentifier === 13 || e.keyIdentifier === 32) {
                  handleClick();
                }
              }}
            >
              Generate
            </button>
          </div>
        </StyleRoot>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  uid: state.session.authUser.uid,
  user: state.profile.user,
  collection: state.collection.collection,
  buckets: state.bucket.buckets,
  generatedImages: state.generate.images,
  bucketDropdownOptions: state.bucket.dropdownOptions,
});

const mapDispatchToProps = {
  getCollection: CollectionThunks.getCollectionByUserId,
  collectImage: CollectionThunks.collectImage,
  getBuckets: BucketThunks.getBuckets,
  getBucketDropdownOptions: BucketActions.getBucketDropdownOptions,
  getGeneratedImages: GenerateThunks.getGeneratedImages,
};

const condition = (authUser) => !!authUser;
export default compose(
  withAuthorization(condition),
  connect(mapStateToProps, mapDispatchToProps)
)(Generate);
