import React, { Component } from 'react'

class Edit extends Component {
  constructor(props) {
    super(props)
    this.state = { name: '' }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({ name: event.target.value })
  }
  render() {
    let { name } = this.state
    return (
      <section>
        <form>
          <label>
            Name:
            <input type="text" value={name} onChange={this.handleChange} />
          </label>
        </form>
        <hr />
        {name &&
          <h2>Hello, {name}</h2>
        }
      </section>
    )
  }
}

export default Edit