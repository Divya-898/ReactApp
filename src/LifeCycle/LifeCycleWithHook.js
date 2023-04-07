import React, { useEffect, useState } from 'react'

function LifeCycleWithHook() {
   const [count, setCount] = useState(0)
   //const [count, setCount] = useState(0)
   console.log(count)
   useEffect(()=>{
    console.log(count)
    //document.title ="count is"+count;
   },[count==3])
  return (
    <div>
      <h1>Life cycle</h1>
      <button onClick={()=>{setCount((count) => count + 1 )}}>update {count}</button>
    </div>
  )
}

export default LifeCycleWithHook
