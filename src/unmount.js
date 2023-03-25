import React, { Component } from 'react'
import Unmount1 from './unmount1'
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
        {this.state.active ? <Unmount1/> : <h1>Component deleted..</h1>}
        <button onClick={this.changmount}>changeState</button>
      </div>
    )
  }
}
