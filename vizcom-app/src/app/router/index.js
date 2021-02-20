import React from "react";
import { Switch, Route } from "react-router-dom";

import Profile from "../../pages/Profile";
import Explore from "../../pages/Explore";
import Home from "../../pages/Home";
import Generate from "../../pages/Home/Generate";
import SketchToRender from "../../pages/Home/SketchToRender";
import LandingPage from "../../pages/LandingPage";

import * as ROUTES from "./routes-const";

const Router = () => (
  <Switch>
    <Route path={ROUTES.PROFILE}>
      <Profile />
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
    {/* <Route path={ROUTES.LANDING_PAGE}>
      <LandingPage />
    </Route> */}
  </Switch>
);

export default Router;