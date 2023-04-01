import React, { useEffect, useState } from 'react'

function FunctionEffect() {
    let [count, setCount] = useState(0);
    useEffect(()=>{
        console.log('hello i am effect' +count)
    })
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count+1)}>update state</button>
    </div>
  )
}

export default FunctionEffect
