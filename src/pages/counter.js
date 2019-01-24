import React, { Component } from 'react'

export default class counter extends Component {
  constructor() {
    super()
    this.state = { count: 0 }
  }
  render() {
    return (
      // All components are JSX
      <div style={{color: this.props.color}}>
        <h1>Counter</h1>
        <p> current count: {this.state.count} </p>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          minus
        </button>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          plus
        </button>
      </div>
    )
  }
}
