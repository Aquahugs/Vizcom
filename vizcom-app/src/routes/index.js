import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import Profile from "../pages/Profile";
import Explore from "../pages/Explore";
import Vizcom from "../pages/Vizcom";
import PrimaryNav from '../Components/Common/primary-navbar';
import Footer from '../Components/Common/footer';


export default function App() {
  return (
    <Router>
        {/* top level routes */}
        {/* A set of routes is defined as a Routes element. Each route is defined in a Route element within it. 
        Whenever the location changes, Routes finds the child Route element that best matches the path prop 
        to the current location and renders the element defined in the element prop. 
        So, the Route element is a bit like an if statement - if its path matches the current path, 
        it renders its element. */}
      <PrimaryNav />
      <div>
        <ul>
          <li>
            <Link to="/vizcom">Vizcom</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/explore">Explore</Link>
          </li>
        </ul>
        <Routes>
          <Route path="profile" element={<Profile />} />
          <Route path="explore" element={<Explore />} />
          <Route path="vizcom/*" element={<Vizcom />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}