import React from 'react'
import { renderToPipeableStream } from 'react-dom/server'
import {Provider as ReduxProvider} from 'react-redux'
import {StaticRouter} from 'react-router-dom/server'
import {AuthProvider} from '../src/Auth/AuthContext/AuthContext'
import { ThemeProvider } from 'styled-components'
import theme from './Theme/ThemeComponent.jsx'
import "bootstrap-icons/font/bootstrap-icons.css";
import { ToastContainer } from "react-toastify";
import axios from 'axios'
import App from './App'

 const url= import.meta.env.VITE_URL;

 axios.defaults.baseURL=url

/**
 * @param {string} url
 * @param {string} [ssrManifest]
 * @param {import('react-dom/server').RenderToPipeableStreamOptions} [options]
 */
const authenticated = false;
const user = null;

export function render(url, ssrManifest, options) {
 
  return renderToPipeableStream(
    <React.StrictMode>
   
      <AuthProvider initialAuthenticated={authenticated} initialUser={user}>
      <StaticRouter location={url}>
      <ThemeProvider theme = {theme}>
      <App />
      </ThemeProvider>
      <ToastContainer/>
      </StaticRouter>
      </AuthProvider>
      
    </React.StrictMode>,
    options
  )
}
