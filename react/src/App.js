import React, { Component } from 'react'
import asyncComponent from './AsyncComponent'
const Footer = asyncComponent(() => import(/* webpackChunkName: "Footer" */'./Footer'))

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timeComponent: null,
      headComponent: null
    }
  }
  render() {
    return (
      <div>
        <button onClick={() => this.loadHeadComponent()}>loadHeadComponent</button>
        {this.state.headComponent}
        <button onClick={() => this.loadTimeComponent()}>loadTimeComponent</button>
        {this.state.timeComponent}
        <Footer />
      </div>
    )
  }
  loadHeadComponent() {
    var that = this
    import(/* webpackChunkName: "Head" */'./Head.js').then(module => {
      var Head = module.default
      that.setState({
        headComponent: <Head />
      })
    })
  }
  loadTimeComponent() {
    if(this.state.timeComponent) {
      return true
    }
    var that = this
    require.ensure([],function(){
      var Time = require('./Time.js').default
      that.setState({
        timeComponent: <Time alertTime={(time) => that.alertTime(time)} />
      })
    },'Time')
  }
  alertTime(time) {
    alert(time)
  }
} 

export default App
