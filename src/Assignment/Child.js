import { computeHeadingLevel } from '@testing-library/react';
import React, { useEffect, useState } from 'react'

export default function Child({count}) {
    console.log("child component render",count)
    const [countTwo, setCountTwo] = useState(0);
    useEffect(() =>{
        console.log("hi",count);
        
    },[count])
    useEffect(() =>{
        console.log("child",countTwo);
        
    })
    const setBtn=()=>{
        setCountTwo(countTwo+1)
    }
  return (
    <div>
    <h1>Props: {count}</h1>
        <h1>{countTwo}</h1>
      <button onClick={setBtn}>update state</button>
    </div>
  )
}
