import React, { Component } from "react";
import {Routes, Route,Link} from 'react-router-dom'
import CartComponent from "./CartComponent";
class HomePage extends Component {
  render() {
    return (
        <>
      <div>
       <Link to="/cart">
        <button>Posts</button>
      </Link>
      </div>
        
        
        </>
    );
  }
}

export default HomePage;