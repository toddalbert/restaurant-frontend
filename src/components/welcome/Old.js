import React, { Component } from 'react'

class Welcome extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }
  render() {
    let { count } = this.state
    return (
      <div>
        <h1>Welcome to Lucky Chinese</h1>
        <p>You clicked Lucky Button {count} times</p>
        <button onClick={() => { this.setState({ count: count + 1 }) }}>
          Click Lucky Button
        </button>
      </div>
    )
  }
}

export default Welcome