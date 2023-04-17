import React from 'react'
import {useParams } from 'react-router-dom';
import StoreComponent from './StoreComponent';
import {decode as base64_decode, encode as base64_encode} from 'base-64';
function FakeCart() {
  console.log("welcome to cart")
   const {id} = useParams();
   const data =JSON.parse(id)
   //let encoded = base64_encode(data);
   //let en = JSON.stringify(encoded)
   //console.log(en)
   //let decoded = base64_decode(encoded);
   //console.log(decoded)
   //let da = JSON.parse(decoded);
   
  return(
      <>
      <h1>welcome to cart</h1>
      <div className="container">
      {data.map((value)=>{
     return(
      <div className='box'>
      <StoreComponent product={value}></StoreComponent>
      </div>
       )
      })}
    </div>
    </>
    )}
  export default FakeCart;
   
    /* const name = {id};
  //console.log(name[0].title);
 const id1 =JSON.stringify({id})
 console.log(id1)
  console.log(Object.values(id));
console.log( typeof( id ));
  var local =localStorage.getItem('username')
  //console.log(typeof(local))
  //const data = JSON.parse(local);
  console.log(typeof( data ))
  
  console.log(data2)
  const data1 = JSON.stringify(data2)
  console.log(typeof(data1))
  console.log(data2[0].title)
  //const data1 = JSON.parse(user);
 // console.log(data.title)
  console.log(local)
  var array = [];
array.push(local);
console.log(array);*/
    
   /*  {data2.map((value)=>{
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
    )}*/
    
  
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
  

