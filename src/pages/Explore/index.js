import React, { useEffect, useState } from "react";
import { compose } from "recompose";
import "./explore.scss";
import { withAuthorization } from "../../router/auth/session";
import mock from "../../assets/Explore.png";
import { Desktop, Tablet, Mobile } from "../Responsive";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import RenderSmoothImage from "render-smooth-image-react";
import InfiniteScroll from "react-infinite-scroll-component";
import "render-smooth-image-react/build/style.css";

import { ExploreThunks } from "./redux";

const Explore = ({ exploreFeed, getExploreFeed, exploreStatus }) => {
  const [allExploreFeed, setAllExploreFeed] = useState(null);
  const [localFeed, setLocalFeed] = useState([]);
  const [loaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetchExploreFeed().then(() => {
      if (!allExploreFeed && exploreFeed) {
        setAllExploreFeed(exploreFeed);
        console.log(allExploreFeed);
      }
      if (!localFeed && allExploreFeed) {
        setLocalFeed(...allExploreFeed.slice(0, 10));
      }
      addToExploreFeed();
    });
  }, []);

  useEffect(() => {
    if (!localFeed && allExploreFeed) {
      console.log("YEEEEEEEEEET", allExploreFeed.slice(0, 10));
      addToExploreFeed();
    }
    addToExploreFeed();
  }, [exploreFeed, allExploreFeed]);

  const addToExploreFeed = (count = 10) => {
    if (allExploreFeed) {
      const tempArray = allExploreFeed?.slice(
        localFeed.length,
        localFeed.length + count
      );
      setLocalFeed([...localFeed, ...tempArray]);

      setIsLoaded(true);
    }
  };

  const fetchExploreFeed = async () => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await getExploreFeed();
        setAllExploreFeed(response);
        resolve(response);
      } catch (error) {
        reject(error);
      }
    });
  };

  if (!exploreFeed) {
    return <div></div>;
  } else {
    return (
      <div className="explore">
        <Desktop>
          <div className="explore-header">
            <h1>Tools</h1>
          </div>
          <InfiniteScroll
            dataLength={localFeed}
            next={() => addToExploreFeed(5)}
            hasMore={true}
            loader={
              <img
                className="infinite-loading-icon"
                src="https://media.giphy.com/media/feN0YJbVs0fwA/giphy.gif"
                alt="loading"
              />
            }
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>you have made it to the end!</b>
              </p>
            }
          >
            <div className="image-grid" style={{ marginTop: "30px" }}>
              {loaded
                ? localFeed.map((item, index) => (
                    <div className="image-item" key={index}>
                      <div>
                        <RenderSmoothImage
                          src={item.image_uri}
                          alt="alternate-text"
                          className="hover-zoom"
                        />
                        <p>
                          collected by{" "}
                          <Link to={`/user/${item.uuid}`}>
                            {item.first_name
                              ? item.first_name
                              : item.display_name}
                          </Link>
                        </p>
                      </div>
                    </div>
                  ))
                : ""}
            </div>
          </InfiniteScroll>
        </Desktop>
        <Tablet>
          <h3>Explore</h3>
          <InfiniteScroll
            dataLength={localFeed}
            next={() => addToExploreFeed(5)}
            hasMore={true}
            loader={
              <img
                className="infinite-loading-icon"
                src="https://media.giphy.com/media/feN0YJbVs0fwA/giphy.gif"
                alt="loading"
              />
            }
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>you have made it to the end!</b>
              </p>
            }
          >
            <div className="image-grid" style={{ marginTop: "30px" }}>
              {loaded
                ? localFeed.map((item, index) => (
                    <div className="image-item" key={index}>
                      <div>
                        <RenderSmoothImage
                          src={item.image_uri}
                          alt="alternate-text"
                          className="hover-zoom"
                        />
                        <p>
                          collected by{" "}
                          <Link to={`/user/${item.uuid}`}>
                            {item.first_name
                              ? item.first_name
                              : item.display_name}
                          </Link>
                        </p>
                      </div>
                    </div>
                  ))
                : ""}
            </div>
          </InfiniteScroll>
        </Tablet>
        <Mobile>
          <InfiniteScroll
            dataLength={localFeed}
            next={() => addToExploreFeed(5)}
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
                ? localFeed.map((item, index) => (
                    <div className="image-item" key={index}>
                      <RenderSmoothImage
                        src={item.image_uri}
                        alt="alternate-text"
                        className="hover-zoom"
                      />
                      <p>
                        collected by{" "}
                        <Link to={`/user/${item.uuid}`}>
                          {item.first_name
                            ? item.first_name
                            : item.display_name}
                        </Link>
                      </p>
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
    exploreFeed: state.explore.feed,
    exploreStatus: state.explore.status,
  };
};

const mapDispatchToProps = {
  getExploreFeed: ExploreThunks.getExploreFeedAsync,
};

const condition = (authUser) => !!authUser;

export default compose(
  withAuthorization(condition),
  connect(mapStateToProps, mapDispatchToProps)
)(Explore);
