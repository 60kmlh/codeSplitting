import React, { Component } from 'react'
import { HashRouter, Route } from 'react-router-dom'
import Bundle from './components/Bundle.js'
import HomeContainer from 'bundle-loader?lazy&name=[name]!./components/Home'
import TimeContainer from 'bundle-loader?lazy&name=[name]!./components/Time'
import AsyncComponent from './components/AsyncComponent'

const Home = () => (
  <Bundle load={HomeContainer}>
    {(Home) => <Home />}
  </Bundle>
)

const Time = () => (
  <Bundle load={TimeContainer}>
    {(Time) => <Time />}
  </Bundle>
)

const Head = AsyncComponent(() => System.import(/* webpackChunkName: "Head" */'./components/Head'))

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={Home} />
        <Route exact path='/time' component={Time} />
        <Route exact path='/head' component={Head} />
      </div>
    )
  }
}

export default App
