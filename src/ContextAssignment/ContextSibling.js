import React, { useEffect, useState } from 'react'

function ContextSibling({count}) {
    console.log("sibling component render",count);
    const [countTwo, setCountTwo] = useState(0)
    useEffect(() =>{
        console.log(" sibling",count);
        
    },[count])
    useEffect(() =>{
        console.log("sibling",countTwo);
        
    })
    const setBtn=()=>{
        setCountTwo(countTwo+1)
    }
    const SetIndex =() =>{
        console.log("siblingCount",count);   
    }
  return (
    <div>
    <h1>Props: {count}</h1>
        <h1>{countTwo}</h1>
      <button onClick={setBtn}>sibling state</button>
      <button onClick={SetIndex}>siblingUpdate state</button>
    </div>
  )
}

export default ContextSibling
