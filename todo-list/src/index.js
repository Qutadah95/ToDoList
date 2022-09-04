import React from "react";
// import ReactDOM from "react-dom";
import {Auth0Provider} from '@auth0/auth0-react'
import { createRoot } from 'react-dom/client'

import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter } from 'react-router-dom'
import TodoApp from "./TodoApp";
// const domain = process.env.REACT_APP_AUTH0_DOMAIN;
// const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
createRoot(document.getElementById('root')).render( <Provider store={store}>
 <Auth0Provider
     domain="dev-krg8-2z1.us.auth0.com"
     clientId="5v1384uU7uQaUCBJyqiAlwpuMNxuktxw"
    redirectUri={window.location.origin}>
  <BrowserRouter>
  <TodoApp />
  </BrowserRouter>
</Auth0Provider></Provider>)

// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   <Provider store={store}>
//     <Auth0Provider 
//     domain={domain}
//     clientId={clintID}
//     redirectUri={window.location.origin}>
//     <BrowserRouter>
//     <TodoApp />
//     </BrowserRouter>
//   </Auth0Provider></Provider>,
  
//   rootElement
// );
