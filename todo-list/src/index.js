import React from "react";
import {Auth0Provider} from '@auth0/auth0-react'
import { createRoot } from 'react-dom/client'
import { CookiesProvider } from "react-cookie";

import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter } from 'react-router-dom'
import TodoApp from "./TodoApp";

createRoot(document.getElementById('root')).render( <Provider store={store}>
  <CookiesProvider>
 <Auth0Provider
     domain="dev-krg8-2z1.us.auth0.com"
     clientId="5v1384uU7uQaUCBJyqiAlwpuMNxuktxw"
    redirectUri={window.location.origin}>
  <BrowserRouter>
  <TodoApp />
  </BrowserRouter>
</Auth0Provider>
  </CookiesProvider>
</Provider>)


