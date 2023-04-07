import React, { useCallback, useState } from 'react'
import ChildCallback from './ChildCallback';

function ParentCallback() {
    const [count, setCount] = useState(0);
    const [countTwo, setCountTwo] = useState([]);
    const increment = () => {
        setCount(count+1);
      };
      const fun = useCallback( ()=>{
          console.log("hello divya")
      },[countTwo])
  return (
    <div>
    <ChildCallback countTwo={countTwo} function={fun}/>
      <button onClick={increment}>+ :{count}</button>
    </div>
  )
}

export default ParentCallback
