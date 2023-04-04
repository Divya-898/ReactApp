import React from 'react'
import {Link} from 'react-router-dom'
function Users() {
  return (
    <div>
      <h1>Welcome to user page</h1>
      <h2> <Link to='/users/1'>User1</Link></h2>
     <h2> <Link to='/users/2'>User2</Link></h2>
     <h2><Link to='/users/3'>User3</Link></h2>
      
    </div>
  )
}

export default Users
