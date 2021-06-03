import React from "react";
import { Switch, Route } from "react-router-dom";

import Profile from "../pages/Profile";
import DynamicProfile from "../pages/Profile/DynamicProfile";
import DynamicBucket from "../pages/Bucket/DynamicBucket";
import Editor from "../pages/Profile/Editor"; //need to put this into /Profile (Profile/Editor)
import CreateBucket from "../pages/Bucket/CreateBucket"; //need to put this into /Profile (Profile/Editor)
import Explore from "../pages/Explore";
import Home from "../pages/Home";
import Generate from "../pages/Home/Generate";
import SketchToRender from "../pages/Home/Sk2R";
import About from "../pages/About";
import SingleBucketView from "../pages/Bucket/SingleBucketView";
import LandingPage from "../pages/LandingPage";
import Admin from "../pages/Admin";

import * as ROUTES from "./routes-const";

const Router = () => (
  <Switch>
    <Route path={ROUTES.PROFILE}>
      <Profile />
    </Route>
    <Route path={ROUTES.EDITOR}>
      <Editor />
    </Route>
    <Route path={ROUTES.ADD_BUCKET}>
      <CreateBucket />
    </Route>
    <Route path={ROUTES.EXPLORE}>
      <Explore />
    </Route>
    <Route path={ROUTES.GENERATE}>
      <Generate />
    </Route>
    <Route path={ROUTES.SKETCH_TO_RENDER}>
      <SketchToRender />
    </Route>
    <Route path={ROUTES.HOME}>
      <Home />
    </Route>
    <Route path="/bucket/:bucket_id">
      <SingleBucketView />
    </Route>
    <Route path="/user/:uid/bucket/:bucket_id">
      <DynamicBucket />
    </Route>
    <Route path="/user/:uid">
      <DynamicProfile />
    </Route>
    <Route path={ROUTES.ABOUT}>
      <About />
    </Route>
    <Route path="/admin">
      <Admin />
    </Route>
    <Route path={ROUTES.LANDING_PAGE}>
      <LandingPage />
    </Route>
  </Switch>
);

export default Router;
