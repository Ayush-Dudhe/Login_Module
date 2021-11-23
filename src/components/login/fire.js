// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
import "firebase/auth";
import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import App from "../../App";
import reportWebVitals from "../../reportWebVitals";

//theme setup
// import * as themes from "./theme/schema.json";
// import { setToLS } from "./utils/storage";

//redux setup
// import { Provider } from "react-redux";
// import {store} from "./redux/store";

//IDP setup using reactfire
import { FirebaseAppProvider } from "reactfire";

const firebaseConfig = {
  apiKey: "AIzaSyAHV28W95T8VJThFOo_j-z3CmHzvlVBn_U",
  authDomain: "qp-qognition-ai-2020-01.firebaseapp.com",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const Index = () => {
//   setToLS("all-themes", themes.default);
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <App />
    </FirebaseAppProvider>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Index />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
