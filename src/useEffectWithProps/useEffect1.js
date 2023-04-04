
import UseEffectWithprops from './UseEffectWithprops'
import React, { useEffect, useState } from 'react'

function UseEffect1() {
    const [data,setData] = useState(10);
    const [count,setCount] = useState(100)
  return (
    <div>
      <UseEffectWithprops count={count} data={data}/>
      <button onClick={()=>setCount(count+1)}>update count</button>
      <button onClick={()=>setData(data+1)}>update data</button>
    </div>
  )
}

export default UseEffect1
