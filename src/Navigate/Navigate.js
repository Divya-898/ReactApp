import React, { Component } from 'react'
import { Navigate } from "react-router-dom";
export default class Navigate1 extends Component {
  render() {
    return (
      <div>
        <button><Navigate to="/wishlist" replace={true} />click</button> 
      </div>
    )
  }
}
