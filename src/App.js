import React from "react";
import Navigation from "./router/Navigation";

import { BrowserRouter } from "react-router-dom";

import { withAuthentication } from "./router/auth/session";

const App = () => {
  return (
    <BrowserRouter >
      <Navigation />
    </BrowserRouter>
  );
};

export default withAuthentication(App);
