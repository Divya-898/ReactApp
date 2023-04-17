import React, { useCallback, useEffect, useState } from 'react'
import Child from './Child';

function Parent() {
    const[count, setCount] = useState(0);
   /*  useEffect(()=>{
     btnHandle();
         
    },[])*/
    const btnHandle = ()=>{
        setCount(count+1)
    }
  return (
    <div>
      <Child count={count} ></Child>
      <h1>{count}</h1>
      <button onClick={btnHandle}>parent state</button>
    </div>
  )
}

export default Parent
