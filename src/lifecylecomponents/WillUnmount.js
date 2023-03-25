import React, { Component } from 'react'

export default class WillUnmount extends Component {
    componentWillUnmount(){
        console.log("componentWillUnmount")
    }
  render() {
    return (
      <div>
        <h1>hey adil brother</h1>
      </div>
    )
  }
}
