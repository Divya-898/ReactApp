import React, { useEffect, useState } from 'react'

function UseEffectWithprops(props) {
    useEffect(()=>{
        alert("count is"+props.count+ '' + props.data)
    },[props.data])
  return (
    <div>
      <h1> Count props : {props.count}</h1>
      <h1> Data props : {props.data}</h1>
    </div>
  )
}

export default UseEffectWithprops
