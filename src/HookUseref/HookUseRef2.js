import React, { useEffect, useRef, useState } from 'react'

function HookUseRef2() {
  const [inputvalue , setInputValue] = useState("");
  //const [count, setCount] = useState(0);
   const count = useRef(0);
   //without useref
  /*useEffect(() =>{
    setCount(count+1)
  }, [])
*/
useEffect(() =>{
   // console.log(count.current)
   count.current = count.current+1;
})
  return (
    <div>
      <label htmlFor=''>Enter Name:</label>
      <input type="text" value={inputvalue} placeholder='enter name' onChange={(e)=> setInputValue(e.target.value)}></input>
    <h2>render count : {count.current}</h2>
    <h3>Data : {inputvalue}</h3>
    </div>
  )
}

export default HookUseRef2
