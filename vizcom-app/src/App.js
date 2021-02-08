import React from "react";

import Navigation from "./common/auth/Navigation";

import { BrowserRouter } from "react-router-dom";

import { withAuthentication } from "./common/auth/session";

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  );
};

export default withAuthentication(App);
