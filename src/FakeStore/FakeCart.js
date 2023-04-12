import React from 'react'

function FakeCart({prod,setFake}) {
  //const {cart} ={prod};
  console.log(prod)
  return (
    <div>
    
    <button className='add' onClick={()=>{
          setFake([prod]);
      }}> add to cart</button>
    </div>
  )
}

export default FakeCart
