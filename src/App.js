import React from "react";
import Navigation from "./router/Navigation";

import { BrowserRouter } from "react-router-dom";

import { withAuthentication } from "./router/auth/session";
import ScrollToTop from "./common/utils/ScrollToTop";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navigation />
    </BrowserRouter>
  );
};

export default withAuthentication(App);
