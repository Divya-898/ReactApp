import React, { useContext } from 'react'
import { NameContext } from '../src/App'

function CompC() {
   const myName = useContext(NameContext)
  return (
    <div>
      <h1>i am component c</h1>
      <h1>{myName}</h1>
    </div>
  )
}

export default CompC
