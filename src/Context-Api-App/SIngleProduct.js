import React from 'react'
import { useContext, useState } from 'react'
import { CartContext } from './Context';
function SingleProduct({prod}) {
    const {cart, setCart} =  useContext(CartContext)
  return (
    <div className="products">
    <img src={prod.image} alt={prod.image}/>
    <div className="ProductDecs">
        <span style={{fontWeight: 700}}>{prod.name}</span>
        <span> {prod.price.substring(0,3)}</span>
    </div>
    {cart.includes(prod) ? (
        <button className='add' onClick={()=>{
          setCart(cart.filter((c)=> c.id !==prod.id));
      }}> remove from cart</button>
    ):(
        <button className='add' onClick={()=>{
          setCart([...cart, prod]);
      }}> add to cart</button>
    )}
      
       
    </div>
  )
}

export default SingleProduct
