import React, { Component } from 'react'

export default class style extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         active:false
      }
    }
    changeColor = ()=>{
        this.setState({
            active:true
        })
    }
  render() {
    let obj = {
        color:"blue",
        backgroundColor:"orange",
        fontSize:"50px"
    }/*
    let obj1 = {
      
        backgroundColor:"orange",
        //fontSize:"50px"
        fontFamily:"cooper"
    }*/

    if(this.state.active){
       obj.backgroundColor ="yellow";
       obj.color="pink"

    }
    return (
      <div>
      {/* inline css 
        <h1 style={{color:"red",backgroundColor:"yellow"}}>learning react</h1>
        //spread operator
        <h1 style={{...obj,...obj1}}>learning react</h1>*/}
        <button style={obj} onClick={this.changeColor}>click</button>
      </div>
    )
  }
}
