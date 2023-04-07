import React, { useEffect, useLayoutEffect, useRef } from 'react'

function Test() {
    const count = 4
    let ref = useRef(count);
    useEffect(()=>{
        ref.current = count+1;
        console.log(ref, 'useEffect')
    },[])
    useLayoutEffect(()=>{
        console.log(ref,'useLayoutEffect')
    },[])
    useEffect(()=>{
        ref.current = count+1;
        console.log(ref.current,'useEffect1')
    },[])
    useLayoutEffect(()=>{
        console.log(ref,'useEffect2')
    },[])
  return (
    <div>
      
    </div>
  )
}

export default Test
