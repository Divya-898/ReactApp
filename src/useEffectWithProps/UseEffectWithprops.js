import React, { useEffect, useState } from 'react'

function UseEffectWithprops(props) {
  useEffect(()=>{
    console.log('component Did mount')
},[])

    useEffect(()=>{
      console.log(props.data+''+props.count)
    },[props.data])
  return (
    <div>
      <h1> Count props : {props.count}</h1>
      <h1> Data props : {props.data}</h1>
    </div>
  )
}

export default UseEffectWithprops
