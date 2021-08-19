import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import allReducers from "./components/redux/combineReducers";
import { createStore } from "redux";

import "@yaireo/ui-switch/src/switch.scss";
import "./styles.scss"; // basic styles for this demo

const store = createStore(allReducers);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
