import React from "react";
import ReactGA from "react-ga";
import Navigation from "./router/Navigation";
import { useEffect } from "react";

import { BrowserRouter } from "react-router-dom";

import { withAuthentication } from "./router/auth/session";
import ScrollToTop from "./common/utils/ScrollToTop";

const App = () => {
  useEffect(() => {
    ReactGA.initialize("UA-201824980-1");
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navigation />
    </BrowserRouter>
  );
};

export default withAuthentication(App);
