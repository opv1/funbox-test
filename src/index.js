import React from 'react'
import ReactDOM from 'react-dom'
import AppState from './state/AppState'
import App from './App'
import './index.scss'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <AppState>
    <App />
  </AppState>,
  document.getElementById('root')
)

serviceWorker.unregister()
