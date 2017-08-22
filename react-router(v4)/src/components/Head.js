import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Head extends Component {
  render() {
    return (
      <div>
        Head
        <br/>
        <Link to='/'>home</Link>
      </div>
    )
  }
}

export default Head
