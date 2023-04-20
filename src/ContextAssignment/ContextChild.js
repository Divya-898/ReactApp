import React, { useContext, useEffect, useState } from 'react'
import { contextTheme } from './ContextParent';

function ContextChild() {
   const {counter}= useContext(contextTheme)
   console.log(counter)
   // console.log("child component render",count)
    const [countTwo, setCountTwo] = useState(0);
   /* useEffect(() =>{
        console.log("hi",count);
        
    },[count])*/
    const SetValue =() =>{
        console.log("child",counter+1);   
    }

   /* const setBtn=()=>{
        setCountTwo(countTwo+1)
        <button onClick={setBtn}>update state</button>
    }*/
  return (
    <div>
    <h1>Props: </h1>
        <h1>{countTwo}</h1>
      
      <button onClick={SetValue}>update child</button>
    </div>
  )
}

export default ContextChild
