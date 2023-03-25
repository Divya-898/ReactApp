import React, { Component } from 'react'
import Child from './child'
export default class parent extends Component {
    parentMethod = (childname)=>{
       // alert("hello from parent"+ childname)
       //template litrals
       alert(`hello from child ${childname}`)
    }
  render() {
    return (
      <div>
        <Child callMethod={this.parentMethod}></Child>
      </div>
    )
  }
}
