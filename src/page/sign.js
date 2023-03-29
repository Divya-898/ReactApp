import React, { Component } from "react";
import {Routes, Route,Link} from 'react-router-dom'
import { BrowserHistory } from "react-router";

import Home from "./Home"
import Explore from "./Explore";
import CartComponent from "./CartComponent";
import HomePage from "./Home";

class Sign extends Component {
    

  render() {
    return (
        <>
        
         <div>
         <Link to="/cart">
        <button>Posts</button>
      </Link>
    </div>
    <Routes>
    <Route path='/' element={<HomePage/>}/>
     <Route path='/cart' element={<CartComponent/>}/>
     </Routes>
      </>
    );
  }
}
export default Sign;
