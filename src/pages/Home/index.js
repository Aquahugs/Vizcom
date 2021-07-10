import "./home.scss";
import React, { useEffect, useState } from "react";

import { compose } from "recompose";
import { connect } from "react-redux";

import { withAuthorization } from "../../router/auth/session";

import { ProfileThunks } from "../Profile/redux";
import { CollectionThunks } from "../Profile/Collection/redux";
import { GenerateThunks } from "./Generate/redux";

import ToolCard from "../../common/components/Card";
import GenerateLogo from "../../assets/generate-logo.png";
import SketchToRenderLogo from "../../assets/s2r.png";
import { GENERATE, SKETCH_TO_RENDER } from "./home-const.js";
import { Tooltip } from "antd";

const Home = ({
  user,
  uid,
  collection,
  getCollection,
  getProfile,
  getGeneratedImages,
}) => {
  useEffect(() => {
    if (!user) {
      getProfile(uid);
      console.log("user", user);
    }
    if (!collection) {
      getCollection(uid);
    }
    getGeneratedImages();
  }, []);

  return (
    <div className="tools">
      <div className="tools-header">
        <h1>Tools</h1>
      </div>
      <div className="row ">
        {" "}
        <ToolCard
          link={GENERATE.link}
          name={GENERATE.name}
          description={GENERATE.description}
          logo={GenerateLogo}
        />
        <ToolCard
          link={SKETCH_TO_RENDER.link}
          name={SKETCH_TO_RENDER.name}
          description={SKETCH_TO_RENDER.description}
          logo={SketchToRenderLogo}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  uid: state.session.authUser.uid,
  user: state.profile.user,
  collection: state.collection.collection,
});

const mapDispatchToProps = {
  getProfile: ProfileThunks.getProfile,
  getCollection: CollectionThunks.getCollectionByUserId,
  getGeneratedImages: GenerateThunks.getGeneratedImages,
};

const condition = (authUser) => !!authUser;
export default compose(
  withAuthorization(condition),
  connect(mapStateToProps, mapDispatchToProps)
)(Home);
