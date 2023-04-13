import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useOutlet, useNavigate, json,Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import FakeCart from './FakeCart';
import { computeHeadingLevel } from '@testing-library/react';
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
        var temp =([value])
        var temp1 = JSON.stringify(temp)
      var te =`${temp1}`;
      var temp2 = JSON.stringify(te)
      console.log(te)
        return(
            <div className='box'>
            <div className='content'>
                <h5>{value.title}</h5>
                <p>{value.description}</p>
            </div>
           <img src={value.image} alt=""/>
           
       <button className='add' id={temp1} onClick={(e,id)=>{
                e.preventDefault();
                var targe =e.target.id
          //setFake([value]);
          console.log("i am divya");
          localStorage.setItem('username',temp1)
          
          //navigate('/store',{...temp})
          //console.log(`/store/${temp}`)
        navigate('/store');
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
