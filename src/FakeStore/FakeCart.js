import React from 'react'
import { useLoaderData, useLocation, useParams } from 'react-router-dom'

function FakeCart() {
//const location =useLocation()
  //const {cart} ={prod};
  console.log("welcome to cart")
  var local =localStorage.getItem('username')
  console.log(local)
  var array = [];
array.push(local);
console.log(array);
//document.write(JSON.stringify(array, null, ' '));

  //const {id} =location.state();
  //console.log({id})
 
  //local.replace(/['"]+/g, '')
  //console.log(local)
  
  return(
    <h1>hello {local[0].id}</h1>
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
