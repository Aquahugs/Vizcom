import React from "react";
import ReactGA from "react-ga";
import Navigation from "./router/Navigation";
import { useEffect } from "react";

import { BrowserRouter } from "react-router-dom";

import { withAuthentication } from "./router/auth/session";
import ScrollToTop from "./common/utils/ScrollToTop";

const App = () => {
  useEffect(() => {
    ReactGA.initialize("G-X1X9Z9C4ZJ");
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navigation />
    </BrowserRouter>
  );
};

export default withAuthentication(App);
