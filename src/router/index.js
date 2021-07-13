import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Profile from "../pages/Profile";
import DynamicProfile from "../pages/Profile/DynamicProfile";
import Editor from "../pages/Profile/Editor"; //need to put this into /Profile (Profile/Editor)
import Explore from "../pages/Explore";
import Home from "../pages/Home";
import Generate from "../pages/Home/Generate";
import SketchToRender from "../pages/Home/SketchToRender";
import SketchToRenderBeta from "../pages/Home/Sk2R";
import About from "../pages/About";
import LandingPage from "../pages/LandingPage";
import LogIn from "../pages/LandingPage/LogIn";
import Admin from "../pages/Admin";
import PrivatePolicy from "../pages/PrivacyPolicy";
import TermsOfUse from "../pages/TermsOfUse";

import * as ROUTES from "./routes-const";

const Router = () => (
  <Switch>
    <Route path={ROUTES.PROFILE}>
      <Profile />
    </Route>
    <Route path={ROUTES.EDITOR}>
      <Editor />
    </Route>
    <Route path={ROUTES.EXPLORE}>
      <Explore />
    </Route>
    <Route path={ROUTES.GENERATE}>
      <Generate />
    </Route>
    <Route path="/sketch-to-render/beta">
      <SketchToRenderBeta />
    </Route>
    <Route path={ROUTES.SKETCH_TO_RENDER}>
      <SketchToRender />
    </Route>
    <Route path={ROUTES.HOME}>
      <Home />
    </Route>
    <Route path="/user/:uid">
      <DynamicProfile />
    </Route>
    <Route path={ROUTES.ABOUT}>
      <About />
    </Route>
    <Route path="/privacy-policy">
      <PrivatePolicy />
    </Route>
    <Route path="/terms-of-use">
      <TermsOfUse />
    </Route>
    <Route path="/admin">
      <Admin />
    </Route>
    <Route path={ROUTES.LOGIN_PAGE}>
      <LogIn />
    </Route>
    <Route path={ROUTES.LANDING_PAGE}>
      <LandingPage />
    </Route>
    <Redirect to="/" />
  </Switch>
);

export default Router;
