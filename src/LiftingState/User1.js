import React from 'react'
import User from './User'

function User1() {
    function parentAlert(data){
        alert(data)
    }
    //let data ="ram"
  return (
    <div>
      <h1>Lifting user state1</h1>
      {/*<User name={data}/>*/}
        <User alert={parentAlert}/>
    </div>
  )
}

export default User1
