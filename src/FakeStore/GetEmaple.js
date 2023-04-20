import React, { useContext } from 'react'
import { ExampleContext } from './ExampleStore'

export default function GetEmaple() {
    const {getDay1}= useContext(ExampleContext);
    const data ={getDay1}
    const data1="sunday";
  return (
    <div>
      <h1>{data}</h1>
      <button onClick={()=>getDay1(data1)}>click</button>
    </div>
  )
}
