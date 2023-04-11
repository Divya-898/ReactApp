import React, { useContext, useState } from 'react'
import { faker } from '@faker-js/faker';
import SingleProduct from './SIngleProduct';
import './style.css'

import { CartContext } from './Context';
faker.seed(100);
function Home() {
  //
    const producrArray = [...Array(20)].map(()=>({
        id:faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.avatar(),
    }));

//const [cart, setCart] = useState([]);

    console.log(producrArray)
    const [product] = useState(producrArray)
   // console.log(cart)
  return (
    <div className='productContainer'>
    {product.map((prod =>(
        
        <SingleProduct prod={prod}  key={prod.id}/>
    )))}
      <h1>Home</h1>
    </div>
  )
}

export default Home
