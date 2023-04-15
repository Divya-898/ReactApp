import React from 'react'
import { useLoaderData, useLocation, useParams } from 'react-router-dom';
import StoreComponent from './StoreComponent';

function FakeCart() {
//const location =useLocation()
  //const {cart} ={prod};
  console.log("welcome to cart")



   const {id} = useParams();
   const name = {id};
  //console.log(name[0].title);
 const id1 =JSON.stringify({id})
 console.log(id1)
  console.log(Object.values(id));
console.log( typeof( id ));
  var local =localStorage.getItem('username')
  //console.log(typeof(local))
  //const data = JSON.parse(local);
  console.log(typeof( data ))
  const data2 =JSON.parse(id)
  console.log(data2)
  const data1 = JSON.stringify(data2)
  console.log(typeof(data1))
  console.log(data2[0].title)
  //const data1 = JSON.parse(user);
 // console.log(data.title)
  console.log(local)
  var array = [];
array.push(local);
console.log(array);
//document.write(JSON.stringify(array, null, ' '));

  //const {id} =location.state();
  //console.log({id})
 
  //local.replace(/['"]+/g, '')
  //console.log(local)
  /*<div className="col">
      <h1>Mi Casa</h1>
      <p>This is my house y&apos;all!</p>
      {id.map(home => <div>{home.title}</div>)}
    </div>*/
  
    return(
      <>
      <h1>welcome to cart</h1>
      <div className="col">
  
      
      {data2.map((value)=>{
     return(
      <div className='box'>
             <StoreComponent product={value}></StoreComponent>
             </div>
      
     )
      })}
    </div>
    
   
    {/*
    
     {data2.map((value)=>{
   return(
    <div className='box'>
           <StoreComponent product={value}></StoreComponent>
           </div>
    
   )
    })}
    {data.map((value)=>
    <div className='box'>
    <div className='content'>
        <h5>{value.title}</h5>
        <p>{value.description}</p>
        <img src={value.image} alt=""/>
    </div>
    </div>
    )}*/}
    </>
  )}

  export default FakeCart
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
  

