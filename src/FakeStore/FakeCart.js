import React from 'react'
import { useParams } from 'react-router-dom'

function FakeCart() {
  //const {cart} ={prod};
  console.log("welcome to cart")
  const {name} =useParams();
  console.log({name})
  return(
    <h1>hello {name}</h1>
  )
  //setFake(product)
  /*return (
    <div>
    
    <button className='add' onClick={()=>{
        <div class="container">
         
          </div>
      }}> add to cart</button>
               
               
        
           
      {/*{prod.map((value)=>{
        const temp =([value])
        console.log({temp.image})
        return(
            <div className='box'>
            <div className='content'>
                <h5>{temp.title}</h5>
                <p>{temp.description}</p>
            </div>
           <img src={temp.image} alt=""/>
           {/*<button className='add' onClick={()=>{
          setFake([value]);
      }}> add to cart</button>
        
          </div>
     
  
        )
      })}
       */
        
      
   // </div>
  
}

export default FakeCart
