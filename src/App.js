import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Login from './loginValidation/Login';
import Wishlist from './loginValidation/Wishlist';
import CompA from './useContext/CompA';
import { createContext } from 'react';
import ControlForm from './controlform/ControlForm';
import SearchParam from './SearchParam/SearchParam';
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
  </>
  );
}

export default App;
