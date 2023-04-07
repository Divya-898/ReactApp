import React, { useEffect, useLayoutEffect } from 'react'

function LayoutEffect() {
    useEffect(()=>{
        console.log('first effect')
    },[]);
    useLayoutEffect(()=>{
        console.log("second layout effect")
    },[])
    useEffect(()=>{
        console.log("third effect")
    },[])
   
  return (
    <div>
      Layout Effect
    </div>
  )
}

export default LayoutEffect
