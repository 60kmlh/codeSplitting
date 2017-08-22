import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div>
        This is Home Page
        <br/>
        <Link to='time'>time</Link>
        <br/>
        <Link to='head'>head</Link>
      </div>
    )
  }
}

export default Home
