import React, { Component } from 'react'

export default class propWithClass extends Component {
  render() {
    return (
      <div>
        <h1>My name is {this.props.name}</h1>
      </div>
    )
  }
}
