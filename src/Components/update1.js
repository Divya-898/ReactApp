import React, { Component } from 'react'
import Update2 from '../update2';
export default class update1 extends Component {
    constructor(){
        super();
        this.state={
            name1:"adil"
        }
    }
    changestate = ()=>{
      console.log("button clicked")
      this.setState({
        name1:"prem"
      })
    }
    
  render() {
    return (
      <div>
        <Update2 name={this.state.name1}/>
        <button onClick={this.changestate}>changestate</button>
      </div>
    )
  }
}
