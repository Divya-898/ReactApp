import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Login from './loginValidation/Login';
import Wishlist from './loginValidation/Wishlist';
function App() {
  return (
    <Routes>
     <Route path='/' element={<Login/>}/>
     <Route path='/wishlist' element={<Wishlist/>}/>
    </Routes>
  );
}

export default App;
