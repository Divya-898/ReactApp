import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Login from './loginValidation/Login';
import Wishlist from './loginValidation/Wishlist';
import CompA from './useContext/CompA';
import { createContext } from 'react';
import ControlForm from './controlform/ControlForm';
import SearchParam from './SearchParam/SearchParam';
import Home from './route-demo/Home';
import Navbar from './route-demo/Navbar';
import Products from './route-demo/Products';
import Shirts from './route-demo/Shirts';
import Jeans from './route-demo/Jeans';
export const NameContext = createContext()

function App() {
  return (
    <>
     {/*<h1>
    <NameContext.Provider value={'ram'}>
    <CompA/>
  </NameContext.Provider>
    </h1>*/}
  
   <Routes>
     <Route path='/' element={<Login/>}/>
     <Route path='/wishlist/:id' element={<Wishlist/>}/>
     <Route path='/search' element={<SearchParam/>}/>
     
  </Routes>
  <Navbar/>
  <Routes>
  <Route path='/home' element={<Home/>}/>
  <Route path='/' element={<Home/>}/>
     
     <Route path='/product' element={<Products/>}>
      {/*nested route */}
     <Route index element={<Shirts/>}></Route>
     <Route path='shirts' element={<Shirts/>}/>
     <Route path='jeans' element={<Jeans/>}/>
     </Route>

  </Routes>
  </>
  );
}

export default App;
