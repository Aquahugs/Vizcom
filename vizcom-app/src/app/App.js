import React from 'react';
import {BrowserRouter} from "react-router-dom";

import PrimaryNav from '../common/components/PrimaryNavbar';
import Footer from '../common/components/Footer';
import SecondaryNav from '../common/components/SecondaryNavbar';
import LandingPage from '../pages/LandingPage';

import history from '../common/utils/history';
import Router from './router';

const App = () => {
  return (
    
    <LandingPage />

    // commented out for now - we do want to redirect after authenticating 
    // to below as this is the main site

    // <BrowserRouter>
    //   <PrimaryNav />
    //   <SecondaryNav />
    //   <main>
    //     <Router history={history} />
    //   </main>
    //   <Footer />
    // </BrowserRouter>

  );
}

export default App;