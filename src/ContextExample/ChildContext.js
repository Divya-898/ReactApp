import React, { useContext } from 'react'
import { globalInfo } from './SuperParent'
import SuperChild from './SuperChild';

export default function ChildContext() {
const {appcolor} = useContext(globalInfo);
console.log(appcolor)
  return (
    <div>
      <h1 style={{color: appcolor}}>React component</h1>
      <SuperChild></SuperChild>
    </div>
  )
}
