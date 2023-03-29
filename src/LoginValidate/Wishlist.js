import React, { Component } from 'react'

export default class Wishlist extends Component {
    constructor(props) {
        super(props);
        this.state = {hello: "Ayushi"}; 
      }
    
  render() {
    console.log('successfully logged')
    return (
       <div>Successfully logged in</div>
    )
  }
}
