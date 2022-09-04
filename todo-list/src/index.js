import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter } from 'react-router-dom'

import TodoApp from "./TodoApp";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <TodoApp />
    </BrowserRouter>
  </Provider>,
  rootElement
);
