import axios from 'axios';
import React, { useRef, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';

function FakeLogin({token,setToken}) {
    //const { token,setToken }  = useContext(userContext)
    const firstRef = useRef();
    const passwordRef = useRef();
   const navigate = useNavigate();
   // const[username, setUsername] = useState("");
    //const[password, setPassword] = useState("");
    const[error, setError] = useState("");
    const loginHandler = ()=>{
        //setError("");
        //setPassword("");
        //setUsername("");
        axios({
            url:'https://fakestoreapi.com/auth/login',
            method:"POST",
            data:{
                firstRef: firstRef,
                passwordRef: passwordRef,
            }
            
        }).then(res=>{
            console.log(res.data.token);
            setToken(res.data.token);
            //localStorage.setItem("userToken",res.data.token)
            const user =res.data.token;
        navigate(`/after/${user}`)
            console.log('user',user)
           // navigate()
            
        }).catch((err)=>{
           console.log(err.response);
           setError(err.response.data)
        })
    }
  return<> <div className='login'>
  <div className='login-input'>
    <div>
      <input ref={firstRef} type="text" placeholder='username'/><br/><br/>
      <input ref={passwordRef} type='password' placeholder='password'/><br/><br/>
      {error && <small>{error}</small>}<br/><br/>
      <button onClick={loginHandler}>Login</button>
    </div>
    </div>
    </div>
    <Outlet></Outlet>
    </>
};

export default FakeLogin
