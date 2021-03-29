import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./redux/store";

import "./index.css";
import App from "./App";
import reportWebVitals from "./common/utils/reportWebVitals";
import Firebase, { FirebaseContext } from "./router/auth/firebase";

import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    {/* connect store with react */}
    <Provider store={store}>
      {/* wrap app with firebase context*/}
      <FirebaseContext.Provider value={new Firebase()}>
        <App />
      </FirebaseContext.Provider>
      ,
    </Provider>
    ,
  </React.StrictMode>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
