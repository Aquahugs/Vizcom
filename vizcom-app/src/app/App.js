import React from "react";

import Navigation from "./auth/Navigation";

import { BrowserRouter } from "react-router-dom";

import { withAuthentication } from "./auth/session";

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  );
};

export default withAuthentication(App);
