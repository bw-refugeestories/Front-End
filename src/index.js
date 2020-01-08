import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { storyReducer } from './utils/reducers/index';
import { BrowserRouter as Router } from "react-router-dom";
import thunk from 'redux-thunk';
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const store = createStore(storyReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  ,document.getElementById("root")
);
