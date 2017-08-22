import React from 'react'
import reactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import App from './App.js'

reactDOM.render(
  <HashRouter basename="/">
    <App />
  </HashRouter>,
  document.getElementById('app')
)