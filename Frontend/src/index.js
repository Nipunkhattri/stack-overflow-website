import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import {Provider} from "react-redux"
import {createStore,applyMiddleware,compose} from "redux"
import thunk from "redux-thunk"
import Reducers from "./reducers";

const store = createStore(Reducers,compose(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);