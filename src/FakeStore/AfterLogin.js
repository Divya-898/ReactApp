import React, { useState } from 'react'

function AfterLogin() {
    const [token, setToken] = useState(localStorage.getItem('userToken') ?? null);
  return (
    <div className='App'>
      <AfterLogin token={token} setToken={setToken}/>
    </div>
  )
}

export default AfterLogin
