import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import store from './app/store'

import './index.css';
import App from './app/App';
import reportWebVitals from './common/utils/reportWebVitals';


const rootElement = document.getElementById('root')
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>,  
  </React.StrictMode>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
