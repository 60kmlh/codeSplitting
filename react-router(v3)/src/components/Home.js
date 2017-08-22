import React, { Component } from 'react'
import { Link } from 'react-router'

class Home extends Component {
  render() {
    return (
      <div>
        This is Home Page
        <br/>
        <Link to='time'>time</Link>
      </div>
    )
  }
}

export default Home
