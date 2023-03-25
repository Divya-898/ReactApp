import React, { Component } from 'react'

export default class student extends Component {
    constructor(){
        super();
        console.log("default constructor")
    }
  render() {
    return (
      <div>
        <h1>hello constructor</h1>
      </div>
    )
  }
}
