import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import {Provider as ReduxProvider} from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import {thunk} from 'redux-thunk';
import rootReducer from './Redux/reducer'
import App from './App'
import axios from 'axios'

const url= import.meta.env.VITE_URL;

axios.defaults.baseURL=url


// Obtener el estado prehidratado del servidor
const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

// Crear el store con el estado prehidratado
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  preloadedState,
  composeEnhancers(applyMiddleware(thunk)));


ReactDOM.hydrateRoot(
  document.getElementById('root'),
  <React.StrictMode>
   <ReduxProvider store= {store}>
   <BrowserRouter>
    <App />
    </BrowserRouter>
   </ReduxProvider>
  </React.StrictMode>
)
