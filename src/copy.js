import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useOutlet, useNavigate, json,Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import FakeCart from './FakeCart';
import { computeHeadingLevel } from '@testing-library/react';
import StoreComponent from './StoreComponent';
import './StoreStyle.css'
//import './App.css';
function FakseStore() {
  //const { setToken }  = useContext(userContext)
 const navigate = useNavigate()
    //'https://fakestoreapi.com/products'
    const [fake, setFake] = useState([]);
    var [temp1] =useState('');
    const {id} = useParams();
    const {user} = useParams()
     temp1 = {id};
    
    console.log(temp1)
    const logOutHandler = useCallback(() =>{
      
      //localStorage.clear(temp);
      navigate('/LoggedIn')
    },[])
    
    console.log(fake)
    const fakeStore = async()=>{
        const response = await fetch("https://fakestoreapi.com/products");
        //console.log(response);
        const jsonData = await response.json();
        //console.log(jsonData)
        setFake(jsonData);
    }
    useMemo(()=>{
      return fakeStore();
  },[])
  return (
    <>
    <div>
    <h1>Hello :{id}</h1>
    <h2>my :{user}</h2>
      <h2>Fake Api Store</h2>
      <button className='Log-out-btn' onClick={logOutHandler}>Log Out</button>
      <div className="container">
      {fake.map((value)=>{
        var temp =([value]);
        console.log(value)
       let encodedObject = encodeURIComponent(JSON.stringify(temp)); 
        return(
          
            
            <div className='box'>
           <StoreComponent product={value}></StoreComponent>
            <button className='add' id={value} onClick={()=>{
               
          //navigate('/store',{...temp})
          //console.log(`/store/${temp}`)
          navigate('/store/'+encodedObject);
          //<FakeCart product={temp} key={value.id} setFake={setFake([value])}/>
      }}> add to cart</button>
        </div>
          
     
  
        )
      })}
       
        
        
        
      </div>

      

    </div>
    <useOutlet/>
    </>
   
  )
}

export default FakseStore