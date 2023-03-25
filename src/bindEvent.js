import React, { Component } from 'react'
import './App.css'
export default class bindEvent extends Component {
    constructor(){
        super();
        //first way to handle event
        this.HandleEvent = this.HandleEvent.bind(this)
        this.state ={
            name: "adil"
        }
          this.state = {
            name:"ram"
          }  
    }
    //custom functionconst b = this.state.name.push("kumar")
    
    
    //handle event with arrow function without this keyword
  render() {
    return (
      <div className="App">
      <h1>{this.state.name}</h1>
      {/*first eay to call event handler method*/}
      <button type="button" onClick={this.HandleEvent}>click</button>
        
     {/* second way without define this keyword in class 
      <button type="button" onClick={this.HandleEvent.bind(this)}>click</button>
      */}
      </div>
    )
  }
}
