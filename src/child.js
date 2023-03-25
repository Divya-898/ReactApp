import React, { Component } from 'react'

export default class child extends Component {
  render() {
    return (
      <div>
        <button onClick={() =>this.props.callMethod('adil')}>click me</button>
      </div>
    )
  }
}
