import React from "react";
import { Router, Route } from "react-router-dom";

import { createBrowserHistory } from "history";
import SignInWithClass from "./LoginValidate/SignInWithClass";

import Wishlist from "./LoginValidate/Wishlist";
/*mport './index.css'
import { Route, Link, Routes, Switch ,Outlet} from 'react-router-dom'

import Users from './User1'
export default function App() {
  return (
    
     <>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users/1">Users</Link>
        </li>
        
      </ul>
      <Routes>
      
        <Route path="/users/:id" element={<Users/>} />
        
        </Routes>
    </div>
    
 </>
 
  )
}
*/



class App extends React.Component {  
  render() {  
    const history = createBrowserHistory();
    return (  
    
        <Router history = {history}>
          <Route path='/' >
            <SignInWithClass/>
          </Route>
          <Route path="/wishlist" >
              <Wishlist/>
          </Route> 
          </Router>
    
    )  
  }  
}  
export default App;
