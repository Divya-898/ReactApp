import React, { useEffect, useState } from 'react'
//import './App.css';
function FakseStore({setToken}) {
    //'https://fakestoreapi.com/products'
    const [fake, setFake] = useState([]);
    const logOutHandler = () =>{
      setToken("");
      localStorage.clear();
    }
    useEffect(()=>{
        fakeStore();
    },[])
    console.log(fake)
    const fakeStore = async()=>{
        const response = await fetch("https://fakestoreapi.com/products");
        //console.log(response);
        const jsonData = await response.json();
        //console.log(jsonData)
        setFake(jsonData);
    }
   
  return (
    <div>
      <h2>Fake Api Store</h2>
      <button className='Log-out-btn' onClick={logOutHandler}>Log Out</button>
      <div className="container">
      {fake.map((value)=>{
        return(
            <div className='box'>
            <div className='content'>
                <h5>{value.title}</h5>
                <p>{value.description}</p>
            </div>
           <img src={value.image} alt=""/>
        </div>
        )
      })}
       
        
        
        
      </div>



    </div>
  )
}

export default FakseStore
