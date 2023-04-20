import axios from 'axios';
import React, { useRef, useState,useEffect } from 'react'
import { Outlet, useNavigate, useParams } from 'react-router-dom';

function FakeLogin({token,setToken}) {
    const focusPoint = useRef(null);
   const lastRef = useRef();
   const {id} = useParams();
    console.log({id})
   useEffect(() =>{
    //console.log(focusPoint);
    //console.log(lastRef);
    
    focusPoint.current.style.backgroundColor = "pink";
    lastRef.current.style.backgroundColor = "pink";
      focusPoint.current.focus();
    //focusPoint.current.focus();
   //lastRef.current.focus();
    //console.log(newRef.current.innerHTML)
   },[focusPoint,lastRef])
    //const { token,setToken }  = useContext(userContext)
    //const firstRef = useRef
   const navigate = useNavigate();
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const[error, setError] = useState("");
    const loginHandler = (e)=>{
      e.preventDefault();
        axios({
            url:'https://fakestoreapi.com/auth/login',
            method:"POST",
            data:{
                username: username,
                password: password,
            }
            
        }).then(res=>{
            console.log(res.data.token);
            setToken(res.data.token);
            //localStorage.setItem("userToken",res.data.token)
            const user =res.data.token;
        navigate('/listofproduct')
            console.log('user',user)  
        }).catch((err)=>{
           //console.log(err.response);
           setError(err.response.data)
        })
    }
  return<> <div className='login'>
  <div className='login-input'>
    <div>
      <input onChange={(e)=>setUsername(e.target.value)} type="text" placeholder='username' ref={focusPoint}/><br/><br/>
      <input  onChange={(e)=>setPassword(e.target.value)} type='password' placeholder='password' ref={lastRef}/><br/><br/>
      {error && <small>{error}</small>}<br/><br/>
      <button onClick={loginHandler}>Login</button>
    </div>
    </div>
    </div>
    <Outlet></Outlet>
    </>
};

export default FakeLogin
