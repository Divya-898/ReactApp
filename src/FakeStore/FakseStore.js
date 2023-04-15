import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import FakeCart from './FakeCart';
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
    
    const fakeStore = async()=>{
        const response = await fetch("https://fakestoreapi.com/products");
        const jsonData = await response.json();
        setFake(jsonData);
    }
    useMemo(()=>{
      return fakeStore();
  },[])



const navigateUser = (e) =>{
  var id =e.target.id;
  console.log(id)
  let encodedObject = encodeURIComponent((id)); 
  console.log(encodedObject)
  navigate('/store/'+encodedObject);
  //console.log(id)
}
//console.log(document.querySelectorAll('.btn-user'))
  return (
    <>
    <div>
    <h1>Hello :{id}</h1>
    <h2>my :{user}</h2>
      <h2>Fake Api Store</h2>
      <button className='Log-out-btn' onClick={logOutHandler}>Log Out</button><br></br><br></br>
     
      <div className="container">
      {fake.map((value)=>{
        var temp =([value]);
        console.log(value)
        let encodedObject = encodeURIComponent(JSON.stringify(temp)); 
          var temp2 = JSON.stringify(value)
        return(
          
            
            <div className='box'>
           <StoreComponent product={value}></StoreComponent>
           <button className="btn-user" id={JSON.stringify(temp)} onClick={navigateUser}>add</button>
          
               
          
           
          

           {/* <button className='add' id={value} onClick={()=>{
               <button className='add'  onClick={()=>{
               navigate('/store/'+encodedObject);
        
              }}>Add to cart</button>
               
          //navigate('/store',{...temp})
          //console.log(`/store/${temp}`)
         // navigate('/store/'+encodedObject);
          //<FakeCart product={temp} key={value.id} setFake={setFake([value])}/>
      }}> add to cart</button>*/} 
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
