import React, { useState } from 'react'
import FakeLogin from './FakeLogin';
import FakseStore from './FakseStore';
import { createContext, useContext } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
export const userContext = createContext()
const AfterLogin = (props) =>{
  const navigate = useNavigate()
  const {Cmp} = props;
 const {id} = useParams();
     
    const [token, setToken] = useState();
    //console.log('hello')
    //{ token ? <userContext.Provider value={{ setToken }}/>: <userContext.Provider value={{ setToken }} token={token}/>}
    //<FakseStore setToken={setToken}/>
  return (
    <div className='App'>
   <h1>hello:{id}</h1>
   
    <FakeLogin token={token} setToken={setToken}/>
    </div>
   
  )
}

export default AfterLogin
