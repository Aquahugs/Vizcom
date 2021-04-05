import React from "react";

import LandingPage from "../../pages/LandingPage";
import About from "../../pages/About";

import history from "../../common/utils/history";
import Router from "../index";

const NavigationNonAuth = () => {
  return (
    <div>
      <Router history={history} />;
    </div>
  );
};

export default NavigationNonAuth;
