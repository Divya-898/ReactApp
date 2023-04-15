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
    useEffect(()=>{
      const add = document.querySelectorAll('.add-btn');
      add.forEach((value) =>{
        value.addEventListner('click',navigateHandle);
      })
  
    },[])

    const navigateHandle = (e) =>{
          const id = e.target.id;
          console.log(id)
    }
    
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
        var t = value.image
        var getBase64StringFromDataURL = (t) =>
    t.replace('data:', '').replace(/^.+,/, '');
    
        var temp3= [{
          title :value.title,
          description:value.description,
          image:getBase64StringFromDataURL(value.image)

        }
        ]
        var temp6 = value.image;
        console.log(temp6);
        //var a =window.btoa(JSON.stringify(temp3)); 
        console.log(typeof(temp3))
       // var t3 =JSON.parse(temp3)
       console.log(temp3)
       const parsetemp = JSON.stringify(temp3)
       let encodedObject = encodeURIComponent(JSON.stringify(temp)); 
       console.log(typeof(parsetemp))
        console.log(parsetemp)
        var parse1 = JSON.parse(parsetemp)
        console.log()
        var temp1 = JSON.stringify(temp)
      var te =`${temp1}`;
      var temp2 = JSON.parse(te)
      var temp4 =temp2[0];
        return(
            <div className='box'>
            <div className='content'>
                <h5>{value.title}</h5>
                <p>{value.description}</p>
            </div>
           <img src={value.image} alt=""/>
           <button className='add-btn' id={temp1}>add</button>
           
       {/*<button className='add' id={temp1} onClick={(e,id)=>{
              
                var targe =e.target.id
          //setFake([value]);
          console.log("i am divya");
          localStorage.setItem('username',temp1)
          var user =localStorage.getItem('username')
          //navigate('/store',{...temp})
          //console.log(`/store/${temp}`)
          navigate('/store/'+encodedObject);
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
