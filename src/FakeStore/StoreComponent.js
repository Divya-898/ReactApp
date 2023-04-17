import React from 'react'

export default function StoreComponent({product}) {
  return (
      <div className='content'>
          <h5>{product.title}</h5>
          <p>{product.description}</p>
          <img src={product.image} alt=""/>
      </div>
    
  )
}
