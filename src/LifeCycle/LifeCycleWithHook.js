import React, { useEffect, useState } from 'react'

function LifeCycleWithHook() {
   const [count, setCount] = useState(0)
   useEffect(()=>{
    console.warn(count)
    //document.title ="count is"+count;
   },[count==2])
  return (
    <div>
      <h1>Life cycle</h1>
      <button onClick={()=>{setCount(count+1)}}>update {count}</button>
    </div>
  )
}

export default LifeCycleWithHook
