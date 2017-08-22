import React, { Component } from 'react'
import { Router, Route, IndexRedirect, hashHistory } from 'react-router'

const Home = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('./components/Home').default)
  }, 'Home')
}

// const Time = (location, cb) => {
//   require.ensure([], require => {
//     cb(null, require('./components/Time').default)
//   }, 'time')
// }

function errorLoading(err) {
 console.error('Dynamic page loading failed', err);
}

class App extends Component {
  render() {
    return (
      <div>
        <Router history={hashHistory}>
          <Route path='/' getComponent={(Home)} />
          <Route path='time' getComponent={(location, cb) => import(/* webpackChunkName: "Time" */'./components/Time').then(module => cb(null, module.default)).catch(errorLoading)} />
        </Router>
      </div>
    )
  }
}

export default App
