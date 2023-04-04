import React from 'react'
import { useParams } from 'react-router-dom';

function Wishlist() {
  //const userid = useParams();
  //const id = userid.id
  const {id} = useParams();
console.log(id)
//email = user[0].email
  //var keyUser = localStorage.getItem('getvalue');
  return (
    <div>
      <h1>Welcome to {id}</h1>
    </div>
  )
}

export default Wishlist
