import React, { Component } from 'react'

export default class unmount1 extends Component {
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
