import React, { useEffect } from 'react'
import {Link, Outlet, useLocation} from 'react-router-dom'
function Products() {
  const location =useLocation()
  console.log(location)
  const handleevent = () =>{
    console.log(location)
  }
  useEffect(() => {
  window.addEventListener("mousemove", () => {});
  return () => {
    window.removeEventListener("mousemove", () => {})
  }
}, []);
  return (
    <>
    <div>
      <h1>this is my product page</h1>
    </div>
    <nav className='child-nav'>
        <Link to="shirts">Shirt</Link>
        <Link to="jeans">Jeans</Link>

    </nav>
    <button onClick={handleevent}>location</button>
    <Outlet></Outlet>
    </>
  )
}

export default Products
