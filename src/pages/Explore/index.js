import React, { useEffect, useState } from "react";
import { compose } from "recompose";
import "./explore.scss";
import { withAuthorization } from "../../router/auth/session";
import mock from "../../assets/Explore.png";
import mobilemock from "../../assets/explore-mobile.png";
import { Desktop, Tablet, Mobile } from "../Responsive";
import StackGrid, { transitions } from "react-stack-grid";
import { connect } from "react-redux";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";
import genanimation from "../../assets/gen-animation.mp4";
import RenderSmoothImage from "render-smooth-image-react";
import InfiniteScroll from "react-infinite-scroll-component";
import "render-smooth-image-react/build/style.css";

const { scaleDown } = transitions;

const Explore = ({ allImages, scrollPosition }) => {
  const [images, setImages] = useState([]);
  const [loaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!images) {
      setImages(...allImages.slice(0, 10));
    }
    fetchImages();
  }, []);

  const fetchImages = (count = 10) => {
    console.log(images.length);
    if (images) {
      const tempArray = allImages?.slice(images.length, images.length + count);
      setImages([...images, ...tempArray]);
      setIsLoaded(true);
    }
  };

  if (!allImages) {
    return <div></div>;
  } else {
    return (
      <div>
        <Desktop>
          <h3>Explore</h3>
          {/* <StackGrid
            appear={scaleDown.appear}
            appeared={scaleDown.appeared}
            enter={scaleDown.enter}
            entered={scaleDown.entered}
            leaved={scaleDown.leaved}
            monitorImagesLoaded={true}
            gutterWidth={50}
            gutterHeight={50}
            columnWidth={200}
          >
            {images &&
              images?.slice(0, 100).map((image, imageKey) => {
                return (
                  <div>
                    <LazyLoadImage
                      key={imageKey}
                      className="gallery-image"
                      src={image.image_uri}
                      effect="opacity"
                      scrollPosition={scrollPosition}
                      width={200}
                      height={200}
                    />
                  </div>
                );
              })}
          </StackGrid> */}
          {/* <StackGrid
            appear={scaleDown.appear}
            appeared={scaleDown.appeared}
            enter={scaleDown.enter}
            entered={scaleDown.entered}
            leaved={scaleDown.leaved}
            monitorImagesLoaded={true}
            gutterWidth={50}
            gutterHeight={50}
            columnWidth={200}
          >
            {images &&
              images?.slice(0, 1000).map((image, imageKey) => {
                return (
                  <div style={{ width: 200, height: 200 }}>
                    <RenderSmoothImage
                      src={image.image_uri}
                      alt="alternate-text"
                    />
                  </div>
                );
              })}
          </StackGrid> */}

          {/* <InfiniteScroll
            dataLength={images}
            next={() => fetchImages(5)}
            hasMore={true}
            loader={
              <img
                src="https://res.cloudinary.com/chuloo/image/upload/v1550093026/scotch-logo-gif_jq4tgr.gif"
                alt="loading"
              />
            }
          >
            <StackGrid
              appear={scaleDown.appear}
              appeared={scaleDown.appeared}
              enter={scaleDown.enter}
              entered={scaleDown.entered}
              leaved={scaleDown.leaved}
              monitorImagesLoaded={true}
              gutterWidth={50}
              gutterHeight={50}
              columnWidth={200}
            >
              {loaded
                ? images.map((image, index) => (
                    <div style={{ width: 200, height: 200 }}>
                      <RenderSmoothImage
                        src={image.image_uri}
                        alt="alternate-text"
                      />
                    </div>
                  ))
                : ""}
            </StackGrid>
          </InfiniteScroll> */}

          <InfiniteScroll
            dataLength={images}
            next={() => fetchImages(5)}
            hasMore={true}
            loader={
              <img
                className="infinite-loading-icon"
                src="https://media.giphy.com/media/feN0YJbVs0fwA/giphy.gif"
                alt="loading"
              />
            }
          >
            <div className="image-grid" style={{ marginTop: "30px" }}>
              {loaded
                ? images.map((image, index) => (
                    <div className="image-item" key={index}>
                      <RenderSmoothImage
                        src={image.image_uri}
                        alt="alternate-text"
                        className="hover-zoom"
                      />
                    </div>
                  ))
                : ""}
            </div>
          </InfiniteScroll>
        </Desktop>
        <Tablet>
          <div className="row placeholder">
            <div className="col s12 m12 l12">
              <h1 className="title">Explore</h1>
              <p>
                {" "}
                A live activity feed of the Vizcom community. Coming soon...
              </p>
              <img alt="mock" className="explore-mock" src={mock} />
            </div>
          </div>
        </Tablet>
        <Mobile>
          <InfiniteScroll
            dataLength={images}
            next={() => fetchImages(5)}
            hasMore={true}
            loader={
              <img
                className="infinite-loading-icon"
                src="https://media.giphy.com/media/feN0YJbVs0fwA/giphy.gif"
                alt="loading"
              />
            }
          >
            <div className="image-grid" style={{ marginTop: "30px" }}>
              {loaded
                ? images.map((image, index) => (
                    <div className="image-item" key={index}>
                      <RenderSmoothImage
                        src={image.image_uri}
                        alt="alternate-text"
                        className="hover-zoom"
                      />
                    </div>
                  ))
                : ""}
            </div>
          </InfiniteScroll>
        </Mobile>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    allImages: state.generate.images,
  };
};

const condition = (authUser) => !!authUser;

export default compose(
  withAuthorization(condition),
  connect(mapStateToProps),
  trackWindowScroll
)(Explore);
