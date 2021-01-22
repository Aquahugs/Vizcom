import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";

import Profile from "../pages/Profile";
import Explore from "../pages/Explore";
import Home from "../pages/Home";
import Generate from "../pages/Home/Generate";
import SketchToRender from "../pages/Home/SketchToRender";
import LandingPage from "../pages/LandingPage";

const Router = () => (
  <Switch>
    <Route path="/profile">
      <Profile />
    </Route>
    <Route path="/explore">
      <Explore />
    </Route>
    <Route path="/generate">
      <Generate />
    </Route>
    <Route path="/sketch-to-render">
      <SketchToRender />
    </Route>
    <Route path="/home">
      <Home />
    </Route>
    <Route path="/">
      <LandingPage />
    </Route>
  </Switch>
)

export default Router;