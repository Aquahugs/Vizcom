import React, { useEffect, useState } from "react";
import { compose } from "recompose";
import "./explore.scss";
import { withAuthorization } from "../../router/auth/session";
import mock from "../../assets/Explore.png";
import { Desktop, Tablet, Mobile } from "../Responsive";
import { connect } from "react-redux";
import RenderSmoothImage from "render-smooth-image-react";
import InfiniteScroll from "react-infinite-scroll-component";
import "render-smooth-image-react/build/style.css";

const Explore = ({ allImages }) => {
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
  connect(mapStateToProps)
)(Explore);
