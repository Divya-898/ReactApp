import React, { Component } from 'react'
import WillUnmount from './WillUnmount'
export default class unmount extends Component {
    constructor(props){
        super(props);
        this.state={
            active: true
        }
    }
    changmount = ()=>{
        this.setState({
            active:false
        })
    }
  render() {
    console.log("parent unmount")
    return (
       
      <div>
        {this.state.active ? <WillUnmount/> : <h1>Component deleted..</h1>}
        <button onClick={this.changmount}>changeState</button>
      </div>
    )
  }
}
