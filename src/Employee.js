import React, { Component } from 'react'

export default class Employee extends Component {
    //pass the prop inside state
    //with constructor to initialize the state
    /*constructor(props){
        super(props);
        this.state = {
            name: this.props.name
           //name: 1
        }
    }*/
    
    //without constructor to initialize the state
    state = {
        name: "learnine react",
        age:13
       
    }
//custom function to change the proprty of state
    changename(){
        this.setState({
            name: "welcome to our page",
            age:24
           // name: this.state.name +1
        })
    }
  render() {
    return (
      <div>
        <h1> {this.state.name}</h1>
        <h1> {this.state.age}</h1>
        <input type="button" value="click" onClick={() => this.changename()}/>
      </div>
    )
  }
}
