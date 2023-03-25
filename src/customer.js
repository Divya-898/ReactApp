
import React, { Component } from 'react'
//destructre with props
/*function customer({name, age}) {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
    </div>
  )
}*/
//second way to destructure prop
/*function customer(props) {
    const {n, age} =props;
    return (
      <div>
        <h1>{n}</h1>
        <h1>{age}</h1>
      </div>
    )
  }*/
//destructure with prop in class component
/*export default class customer extends Component {
  render() {
    const{name,age} = this.props
    return (
      <div>
        <h1>{name}</h1>
        <h1>{age}</h1>
      </div>
    )
  }
}*/
//destructure with state in class component
export default class customer extends Component {
    constructor(props){
        super(props)
        this.state ={
            name:"amit",
            age:"24"
        }
    }
  render() {
    const { name, age} = this.state;
    return (
        
      <div>
        <h1>{name}</h1>
        <h1>{age}</h1>
      </div>
    )
  }
}




