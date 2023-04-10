import React, { useState } from 'react'
import FakeLogin from './FakeLogin';
import FakseStore from './FakseStore';


const AfterLogin = (props) =>{
  //const {Cmp} = props;
    const [token, setToken] = useState(localStorage.getItem('userToken') ?? null);
    //console.log('hello')
  return (
    <div className='App'>
  
    {token ? <FakseStore setToken={setToken}/> : <FakeLogin token={token} setToken={setToken}/>}
     
    </div>
  )
}

export default AfterLogin
