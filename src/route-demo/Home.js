import React from 'react'
import { Link, useLocation } from 'react-router-dom'
function Home() {
  const location =useLocation()
  console.log(location)
  return (
    <div>
      <h1>Welcome to my home page</h1>
    
    </div>
  )
}

export default Home
