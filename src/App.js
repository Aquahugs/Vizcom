import React from "react";
import Navigation from "./router/Navigation";

import { BrowserRouter } from "react-router-dom";

import { withAuthentication } from "./router/auth/session";
import ScrollToTop from './router/ScrollToTop'

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navigation />
    </BrowserRouter>
  )
}

export default withAuthentication(App);
