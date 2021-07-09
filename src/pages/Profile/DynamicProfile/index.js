import React, { useState, useEffect } from "react";
import { compose } from "recompose";
import { withAuthorization } from "../../../router/auth/session";
import { Link } from "react-router-dom";

import "../profile.scss";
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
import backarrow from "../../../assets/back-arrow.svg";

import userService from "../../../common/services/user-service";
import collectionService from "../../../common/services/collection-service";

const DynamicProfile = ({ match }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const [profile, setProfile] = useState(null);
  const [collection, setCollection] = useState(null);

  useEffect(() => {
    getUserInfo().then(setIsLoaded(true));
  }, []);

  const getUserInfo = async () => {
    const { params } = match;
    const profileResponse = await userService.getUserById(params.uid);
    setProfile(profileResponse.data);

    const collectionResponse = await collectionService.getCollectionByUserId(
      params.uid
    );
    setCollection(collectionResponse.data);
  };

  if (!isLoaded && profile && collection) {
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
            <div className="row">
              <div className="col sm12 m12 l12">
                <div className="row bio-header">
                  {profile && profile?.first_name ? (
                    <h1>{profile.first_name}</h1>
                  ) : (
                    <h1>{profile?.display_name}</h1>
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
            )}
          </div>
        </Desktop>
        <Tablet>
          <div className="profile-container">
            <div className="row">
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
            <div className="row">
              <div className="col sm12 m12 l12">
                <div className="row bio-header">
                  {profile && profile?.first_name ? (
                    <h1>{profile?.first_name}</h1>
                  ) : (
                    <h1>{profile?.display_name}</h1>
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
                <Link to={"/explore"}>
                  <img
                    alt="back arrow icon"
                    className="backarrow"
                    src={backarrow}
                  />
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col s12 m12 l12">
                <div className="row bio-header-mobile">
                  {profile?.first_name ? (
                    <h1>{profile?.first_name}</h1>
                  ) : (
                    <h1>{profile?.display_name}</h1>
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
                    <li>Collection</li>
                  </ul>
                </div>
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
