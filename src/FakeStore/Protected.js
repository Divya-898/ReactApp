import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Protected() {
  return (
    <>
    <div>
      <nav>
        <ul>
       
          
        </ul>
      </nav>
      
    </div>
    <Outlet></Outlet>
    </>
  )
}

export default Protected
