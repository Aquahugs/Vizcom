import React from "react";

import LandingPage from "../../pages/LandingPage";
import About from "../../pages/About";
<<<<<<< HEAD

const NavigationNonAuth = () => {
  return <LandingPage />;
 
=======

import history from "../../common/utils/history";
import Router from "../index";

const NavigationNonAuth = () => {
  return (
    <div>
      <Router history={history} />;
    </div>
  );
>>>>>>> bb159c85a5f966d2092c4765bd4ca48818b7de9c
};

export default NavigationNonAuth;
