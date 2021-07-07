import React, { useState, useEffect } from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import { fadeInUp } from "react-animations";
import Radium, { StyleRoot } from "radium";
import "./generate.scss";
import "./add-to-bucket.scss";
import Modal from "react-modal";
import { Desktop, Tablet, Mobile } from "../../Responsive";
import { CollectionThunks } from "../../Profile/Collection/redux";
import { BucketThunks, BucketActions } from "../../Bucket/redux";
import { GenerateThunks } from "./redux";

import { withAuthorization } from "../../../router/auth/session";
// import "render-smooth-image-react/build/style.css";

import downloadbutton from "../../../assets/download-button.svg";
import collectconfirm from "../../../assets/collect-confirm.svg";
import conceptart from "../../../assets/conceptart-holder.png";
import footwear from "../../../assets/footwear-holder.png";
import genanimation from "../../../assets/gen-animation.mp4";
import backarrow from "../../../assets/back-arrow.svg";
import AddToBucket from "./AddToBucket";
import RenderSmoothImage from "render-smooth-image-react";
import "render-smooth-image-react/build/style.css";
import { Link } from "react-router-dom";

const Generate = ({
  buckets,
  uid,
  getCollection,
  getBuckets,
  getBucketDropdownOptions,
  generatedImages,
  collectImage,
  getGeneratedImages,
  conceptGeneratedImages,
  carGeneratedImages,
  bucketDropdownOptions,
  generateStatus,
}) => {
  // Local state
  const [isLoaded, setIsLoaded] = useState(false);
  const [displayBuckets, setDisplayBuckets] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedDisplayImages, setGeneratedDisplayImages] = useState([]);
  const [imageDownload, setImageDownload] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [generatorState, setToggle] = useState("car");

  useEffect(() => {
    !generatedImages
      ? fetchGeneratedImages()
      : toggleGeneratedImages(generatedImages.car, 18);
    getCollection(uid);
    if (!buckets) {
      getBuckets(uid);
    }
    // options for bucket search
    const bucketOptionDropdown = buckets?.map((bucket) => ({
      name: bucket.bucket_name,
      value: bucket.bucket_id,
    }));
    getBucketDropdownOptions(bucketOptionDropdown);

    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (generatorState === "car") {
      !generatedImages
        ? fetchGeneratedImages()
        : toggleGeneratedImages(generatedImages.car, 18);
    }

    if (generatorState === "concept") {
      !generatedImages
        ? fetchGeneratedImages()
        : toggleGeneratedImages(generatedImages.concept, 18);
    }
  }, [generatorState]);

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
        if (generatorState === "car") {
          toggleGeneratedImages(generatedImages.car, 18);
        }
        if (generatorState === "concept") {
          toggleGeneratedImages(generatedImages.concept, 18);
        }
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
    result?.map((image) => {
      return {
        ...image,
        isCollected: false,
      };
    });
    setGeneratedDisplayImages(result);

    setTimeout(() => {
      setIsGenerating(false);
    }, 1800);
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
    const imageObj = {
      uuid: uid,
      generated_image_id: image.generated_image_id,
      user_uploaded_image_id: null,
      image_uri: image.image_uri,
    };

    collectImage(imageObj);

    generatedDisplayImages.map((image) => {
      if (image.generated_image_id === imageObj.generated_image_id) {
        image.isCollected = true;
      }
      return image;
    });
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

  //  STYLES
  const modalStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      maxWidth: "60%",
      width: "900px",
      height: "750px",
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
    paddingBottom: "9.5%",
  };

  const footActive = {
    backgroundColor: generatorState === "footwear" ? "#D9D9D9" : "white",
  };
  const carActive = {
    backgroundColor: generatorState === "car" ? "#D9D9D9" : "white",
  };
  const conceptActive = {
    backgroundColor: generatorState === "concept" ? "#D9D9D9" : "white",
  };

  const images = generatedDisplayImages
    ?.slice(0, 19)
    .map((image, imageIndex) => {
      return (
        <div key={`Key${imageIndex}`}>
          <Desktop>
            <div className="generate-images"></div>
            <div
              className="col s2 m2 l2 image-box "
              onClick={() => {
                openModal(image);
              }}
            >
              <RenderSmoothImage
                alt="ai generated"
                className="generated-image"
                src={image.image_uri}
              />
            </div>
          </Desktop>
        </div>
      );
    });

  //TABLET VIEW
  const tabletImages = generatedDisplayImages
    ?.slice(0, 12)
    .map((image, imageIndex) => {
      return (
        <div
          key={`Key${imageIndex}`}
          onClick={() => {
            openModal(image);
          }}
        >
          <Tablet>
            <div className="col s3 m3 l3 ">
              <RenderSmoothImage
                alt="ai generated"
                className="generated-image"
                src={image.image_uri}
              />
            </div>
          </Tablet>
        </div>
      );
    });

  //MOBILE VIEW
  const mobileImages = generatedDisplayImages
    ?.slice(0, 4)
    .map((image, imageIndex) => {
      return (
        <div
          key={`Key${imageIndex}`}
          onClick={() => {
            openModal(image);
          }}
        >
          <Mobile>
            <div className="col s6 m6 l6">
              <RenderSmoothImage
                alt="ai generated"
                className="generated-image"
                src={image.image_uri}
              />
            </div>
          </Mobile>
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
          className="modalStyles"
          contentLabel="Example Modal"
          onAfterClose={closeModal}
        >
          <span>
            {/* Pop up modal */}
            <div className="row container-modal">
              <div className="col s12 m12 l12 ">
                <RenderSmoothImage
                  alt="ai generated"
                  className="generated-imagemodal"
                  src={modalImage.image_uri}
                  style={visibilityStyle}
                />
              </div>
              <div className="col s12 m12 l12 generated-info">
                <div className="button-container row">
                  <div style={hideBuckets}>
                    <div>
                      <div className="col s12 m12 l12">
                        {modalImage.isCollected ? (
                          <img
                            alt="confirm icon"
                            className="collect-confirm"
                            src={collectconfirm}
                          />
                        ) : (
                          // eslint-disable-next-line jsx-a11y/anchor-is-valid
                          <a
                            className="collect"
                            onClick={() => collectImageHandler(modalImage)}
                          >
                            Collect
                            <i className="material-icons right">add_box</i>
                          </a>
                        )}
                      </div>
                      <div className="col s12 m12 l12">
                        <button
                          className="waves-effect waves-grey btn-flat add-bucket"
                          onClick={toggleBuckets}
                        >
                          <i className="material-icons right add-to">apps</i>Add
                          to bucket
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className=" col s12 m12 l12" style={showBuckets}>
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
  if (generateStatus === "GETTING") {
    return <div>LOADING</div>;
  } else {
    return (
      <div>
        {modal}
        <Link to={"home"}>
          <img alt="back arrow" className="backarrow" src={backarrow} />
        </Link>
        <div className="row generate-container">
          <div className="row tag"></div>

          <StyleRoot>
            <div className="row">
              {/* GENERATOR MODE SELECTOR */}
              <div className=" selector-container">
                <button
                  onClick={() => setToggle("car")}
                  style={carActive}
                  class=" btn btn-flat "
                >
                  car-design
                </button>
                <button
                  onClick={() => setToggle("concept")}
                  class=" btn btn-flat "
                  style={conceptActive}
                  class="btn btn-flat"
                >
                  concept art
                </button>
                <button
                  onClick={() => setToggle("footwear")}
                  class=" btn btn-flat "
                  style={footActive}
                  class="btn btn-flat"
                >
                  footwear
                </button>
              </div>
            </div>
            {generatorState === "footwear" && (
              <div className="row comingsoon">
                <h1>coming soon</h1>
                <img src={footwear} />
              </div>
            )}

            {/* LOAD ANIMATION THIS CAN BE REFACTORED INTO A LOT LESS CODE LATER */}
            <Desktop>
              <div className="row load-animation ">
                <div className="col s12 m12 l12 " style={hiddenStyle}>
                  <img src="https://firebasestorage.googleapis.com/v0/b/designerspen-95f24.appspot.com/o/Rolling-1.9s-200px.gif?alt=media&token=37081324-82b9-473f-a4ac-bd23bce13f55" />
                </div>
              </div>
            </Desktop>
            <Tablet>
              <div className="row load-animation">
                <div className="col s12 m12 l12 " style={hiddenStyle}>
                  <img src="https://firebasestorage.googleapis.com/v0/b/designerspen-95f24.appspot.com/o/Rolling-1.9s-200px.gif?alt=media&token=37081324-82b9-473f-a4ac-bd23bce13f55" />
                </div>
              </div>
            </Tablet>
            <Mobile>
              <div className="mobile-loader">
                <img
                  style={hiddenStyle}
                  src="https://firebasestorage.googleapis.com/v0/b/designerspen-95f24.appspot.com/o/gen-animation.gif?alt=media&token=3a9bac88-388d-4961-afaf-2b3ff28999b9"
                />
              </div>
            </Mobile>
            {generatorState !== "footwear" && (
              <div>
                <div className="row gen-container" style={visibilityStyle}>
                  <div>{images}</div>
                </div>
                <div className="row" style={visibilityStyle}>
                  <div>{mobileImages}</div>
                </div>
                <div className="row tablet-images" style={visibilityStyle}>
                  <div>{tabletImages}</div>
                </div>
              </div>
            )}

            {generatorState !== "footwear" && (
              <div className=" genbtn-container row" style={styles.fadeInUp}>
                <div>
                  <button
                    a
                    href="#"
                    className="btn waves-effect generate-btn lighten-1 z-depth-0"
                    onClick={
                      generatorState === "car"
                        ? () => toggleGeneratedImages(generatedImages.car, 18)
                        : () =>
                            toggleGeneratedImages(generatedImages.concept, 18)
                    }
                    onMouseDown={() => handleClick}
                    onKeyUp={(e) => {
                      if (e.keyIdentifier === 13 || e.keyIdentifier === 32) {
                        handleClick();
                      }
                    }}
                    style={{
                      zIndex: modalIsOpen === false ? 9999 : -9999,
                    }}
                  >
                    Generate
                  </button>
                </div>
              </div>
            )}
          </StyleRoot>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  uid: state.session.authUser.uid,
  user: state.profile.user,
  collection: state.collection.collection,
  buckets: state.bucket.buckets,
  generatedImages: state.generate.images,
  bucketDropdownOptions: state.bucket.dropdownOptions,
  generateStatus: state.generate.status,
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
