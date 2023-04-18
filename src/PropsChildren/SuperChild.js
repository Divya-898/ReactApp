import React, { Children } from 'react'
import ChildrenPropss from './ChildrenProps'
import NextChildProps from './nextChildProps'

export default function SuperChild() {
  return (
    <div>
     <ChildrenPropss>

       <NextChildProps></NextChildProps>
     </ChildrenPropss>
    </div>
  )
}
