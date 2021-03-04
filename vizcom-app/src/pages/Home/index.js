import "./home.scss";
import React, { useEffect, useState } from "react";

import { compose } from "recompose";
import { connect } from "react-redux";

import { withAuthorization } from "../../router/auth/session";

import { ProfileThunks } from "../Profile/redux";
import { CollectionThunks } from "../Profile/Collection/redux";
import history from "../../common/utils/history";
import ToolCard from "../../common/components/Card";
import GenerateLogo from "../../assets/generate-logo.png";
import SketchToRenderLogo from "../../assets/s2r.png";
import { GENERATE, SKETCH_TO_RENDER } from "./home-const.js";

const Home = ({ user, uid, collection, getCollection, getProfile }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!user) {
      getProfile(uid);
      console.log("user", user);
    }
    console.log("collection", collection);
    if (!collection) {
      getCollection(uid);
      console.log("collection", collection);
    }
    // if (!buckets) {
    //   getBuckets();
    // }
    history.push('/');
  }, 
  
  []);

 

  return (
    
    <div className="tools">
      <div className="tools-header">
        <h1>Tools</h1>
      </div>
      {/* {data &&
        data.map((user, i) => {
          return (
            <p key={`${user.email}_{anObjectMapped.email}`}>
              {user.name} - {user.email}
            </p>
          );
        })} */}
      {data && <p>{data.email}</p>}
      <div className="nav row">
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

/*
map state to props
*/
const mapStateToProps = (state) => ({
  uid: state.session.authUser.uid,
  user: state.profile.user,
  collection: state.collection.collection,
});

const mapDispatchToProps = {
  getProfile: ProfileThunks.getProfile,
  getCollection: CollectionThunks.getCollectionByUserId,
};

const condition = (authUser) => !!authUser;
export default compose(
  withAuthorization(condition),
  connect(mapStateToProps, mapDispatchToProps)
)(Home);
