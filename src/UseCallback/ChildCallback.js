import React,{memo} from 'react'

function ChildCallback({countTwo}) {
    console.log("child component render")
  return (
    <div>
      <h1>ChildCallback</h1>
    </div>
  )
}

export default memo(ChildCallback);
