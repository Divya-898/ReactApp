import React, { useState } from 'react'

function USComponent() {
   const [name, setName] = useState("Divya")
   let changeState = () =>{
    setName("Zain")
   }
  return (
    <div>
      <h1>{name}</h1>
      {/*<button onClick={() => myArray[1]("kumar") }>update</button>*/}
      <button onClick={changeState}>update</button>
    </div>
  )
}

export default USComponent
