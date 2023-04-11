import React from 'react'
import { Link } from 'react-router-dom';
import  { useContext } from 'react'
import { CartContext } from './Context';
import './style.css'
function Header() {
    const {cart} =  useContext(CartContext)
  return (
    <div>
      <span>React context api</span>
      <ul className='nav'>
      <li>
        <Link to="/">Home</Link>
      </li>
        <li><Link to="/cart">Cart {cart.length}</Link></li>
      </ul>
    </div>
  )
}

export default Header
