import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./css/index.css";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
