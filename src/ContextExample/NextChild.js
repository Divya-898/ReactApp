
import React, { useContext } from 'react'
import { globalInfo } from './SuperParent'
export default function NextChild() {
    const {appcolor} = useContext(globalInfo);
    
    console.log(appcolor)
      return (
        <div>
          <h1 style={{color: appcolor}}>next component</h1>
          
        </div>
      )
}
