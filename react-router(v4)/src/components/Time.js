import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Time extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: new Date().toString(),
      t:null
    }
  }
  componentDidMount() {
    this.updateTime()
  }
  componentWillUnmount() {
    clearInterval(this.state.t)
  }
  render() {
    return (
      <div>
        {this.state.time}
        <Link to='/'>home</Link>
      </div>
    )
  }
  updateTime() {
    this.state.t = setInterval(() => {
      this.setState({time: new Date().toString()})
    }, 1000)
  }
}
export default Time
