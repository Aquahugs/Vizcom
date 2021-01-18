import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Profile from "../pages/Profile";
import Explore from "../pages/Explore";
import Vizcom from "../pages/Vizcom";
import Generate from "../pages/Vizcom/Generate";
import SketchToRender from "../pages/Vizcom/SketchToRender";

import PrimaryNav from '../Components/Common/primary-navbar';
import SecondaryNav from '../Components/Common/secondary-navbar';
import Footer from '../Components/Common/footer';

export default function App() {
  return (
    <Router>
      <PrimaryNav />
      <SecondaryNav />
      <div>
        { 
          /* top level routes */
          /* A set of routes is defined as a Routes element. Each route is defined in a Route element within it. 
          Whenever the location changes, Routes finds the child Route element that best matches the path prop 
          to the current location and renders the element defined in the element prop. 
          So, the Route element is a bit like an if statement - if its path matches the current path, 
          it renders its element. */
        }
        <Routes>
          <Route path="profile" element={<Profile />} />
          <Route path="explore" element={<Explore />} />
          <Route path="/" element={<Vizcom />} />
          <Route path="generate" element={<Generate />} />
          <Route path="sketch-to-render" element={<SketchToRender />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}