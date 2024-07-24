import React from 'react'
import { renderToPipeableStream } from 'react-dom/server'
import {StaticRouter} from 'react-router-dom/server'
import {Provider as ReduxProvider} from 'react-redux'
import store from './Redux/store'
import App from './App'
import axios from 'axios'

/**
 * @param {string} url
 * @param {string} [ssrManifest]
 * @param {import('react-dom/server').RenderToPipeableStreamOptions} [options]
 */

const url= import.meta.env.VITE_URL;

axios.defaults.baseURL=url

export function render(url, ssrManifest, options) {
  return renderToPipeableStream(
    <React.StrictMode>
      <ReduxProvider store={store}>
       <StaticRouter location={url}>
      <App />
      </StaticRouter>
      </ReduxProvider>
    </React.StrictMode>,
    options
  )
}
