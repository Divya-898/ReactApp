import React, { useState } from 'react'

function USWithObject() {
    const obj = {
        name:"divya",
        age:"23",
        height:5.4,
        isYoung:true
    }
   const [person, setPerson] = useState(obj);
   //update all the field
   /*let changeState = () =>{
      setPerson({
        name:'zain',
        age:"24",
        height:5.4,
        isYoung:false
      })
   }*/
   //update single field
   let changeState = () =>{
    setPerson(previousState =>{
      return{
       
        name:"kumar"
      }
    })
}
  return (
    <div>
      <h1>{person.name}</h1>
      <h1>{person.age}</h1>
      <h1>{person.height}</h1>
      <h1>{person.isYoung.toString()}</h1>
      <button onClick={changeState}>update</button>
    </div>
  )
}

export default USWithObject
