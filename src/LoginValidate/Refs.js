import React, { Component } from 'react'

export default class Refs extends Component {
  constructor(props) {
    super(props)  
      this.quantityRef = React.createRef();
  }
  incrementQuantity=() =>{
   this.quantityRef.current.value++;
  }

  render() {
    alert('text box')
    return (
      <div>
      <p>
        <label>Enter entity:<input type="text" ref={this.quantityRef}></input>
        <button onClick={this.incrementQuantity}>+</button>
        </label>
        </p>
      </div>
    )
  }
}
