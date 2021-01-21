import React from 'react';
import {BrowserRouter} from "react-router-dom";

import PrimaryNav from './pages/components/primary-navbar';
import Footer from './pages/components/footer';
import SecondaryNav from './pages/components/secondary-navbar';

import history from './utils/history';
import Router from './Router';

const App = () => {
  return (
    <BrowserRouter>
      <PrimaryNav />
      <SecondaryNav />
      <main>
        <Router history={history} />
      </main>
      <Footer />
    </BrowserRouter>

  );
}

export default App;