import React from 'react'
import {Link, Outlet} from 'react-router-dom'
function Products() {
  return (
    <>
    <div>
      <h1>this is my product page</h1>
    </div>
    <nav className='child-nav'>
        <Link to="shirts">Shirt</Link>
        <Link to="jeans">Jeans</Link>
    </nav>
    <Outlet></Outlet>
    </>
  )
}

export default Products
