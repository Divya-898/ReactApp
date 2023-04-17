import React, { useContext } from 'react'
import { globalInfo } from './SuperParent'

export default function SuperChild() {
    const {appcolor,getDay} = useContext(globalInfo);
    const day="sunday";
    console.log(appcolor)
      return (
        <div>
          <h1 style={{color: appcolor}}>super child component</h1>
          <button onClick={()=>getDay(day)}>click me</button>
        </div>
      )
}
