import React, { Component } from 'react'
import './CssStylesheet.css'
export default class CssStylesheet extends Component {
  render() {
    let x = this.props.check ? 'myFont' : 'myFont2'
    return (
      <div>
        <h1 className={`${x} myFont3`}>My name is Divya</h1>
      </div>
    )
  }
}
