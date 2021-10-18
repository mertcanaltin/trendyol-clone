import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";

import store from "./redux/store";
import Routes from "./utils/routes";
import reportWebVitals from "./utils/reportWebVitals";

import './index.css';
import "./utils/grid"
import "./styles/main.scss";
import "./styles/icomoon.scss"

ReactDOM.render(
  <Provider store={store}>
    <Routes/>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
