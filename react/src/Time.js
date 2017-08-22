import React, { Component } from 'react'
class Time extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time:new Date().toString()
    }
  }
  componentDidMount() {
    this.updateTime()
  }
  render() {
    return (
      <div>
        {this.state.time}
        <button onClick={() => this.props.alertTime(this.state.time)}>alertTime</button>
      </div>
    )
  }
  updateTime() {
    var t = setInterval(() => {
      this.setState({time: new Date().toString()})
    }, 1000)
  }
}
export default Time
