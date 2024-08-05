import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { ThemeProvider } from "styled-components";
import theme from "./Theme/ThemeComponent.jsx";
import "bootstrap-icons/font/bootstrap-icons.css";
import { ToastContainer } from "react-toastify";
//import store from './redux/store'
import { createStore, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import rootReducer from "./redux/reducer.js";
import { AuthProvider } from "../src/Auth/AuthContext/AuthContext";
import axios from "axios";

const url = import.meta.env.VITE_URL;

axios.defaults.baseURL = url;

// Obtener el estado prehidratado del servidor
const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

// Crear el store con el estado prehidratado
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  preloadedState,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.hydrateRoot(
  document.getElementById("root"),
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <ReduxProvider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ReduxProvider>
        <ToastContainer />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
