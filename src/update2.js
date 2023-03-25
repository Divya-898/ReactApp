import React, { Component } from 'react'

export default class update2 extends Component {
    constructor(props){
        super(props);
        this.state={
            name2:this.props.name
        }
    }
    static getDerivedStateFromProps(props, state){
        console.log("getderived")
        if(props.name !== state.name2){
            return  {
                name2:props.name
            }
            
        }
        
        return null;
    }
  render() {
    return (
      <div>
        <h1>{this.state.name2}</h1>
      </div>
    )
  }
}
