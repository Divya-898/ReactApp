import React, { useEffect, useState } from 'react'

function FunctionEffect() {
    let [count, setCount] = useState(0);
    let [name, setName] = useState('adil');
   /* useEffect(()=>{
        console.log('hello i am effect' +count)
    },[])*/
    //second way
    useEffect(()=>{
      console.log('hello i am effect =' +count)
  },[count])

  useEffect(()=>{
    console.log('hello i am effect =' +name)
},[name])
  return (
    <div>
      <h1>{count}</h1>
      <h1>{name}</h1>
      <button onClick={() => setCount(count+1)}>update state</button>
      <button onClick={() => setName(name='kumar')}>update name</button>
    </div>
  )
}

export default FunctionEffect
