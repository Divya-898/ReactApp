import React, { useEffect, useLayoutEffect, useState } from 'react'

function LayoutEffect1() {
    const [num, setNum] = useState(0);
    const [data, setData] = useState(0);
    useEffect(()=>{
        if(num == 0) setNum(5 +Math.random() * 50);
        console.log("use Effect",num)
    },[num])
   
    useLayoutEffect(()=>{
        if(data == 0) setData(5 +Math.random() * 50);
        console.log("Layout Effect",data)
    },[data])
    
  return (
    <div>
      <h2>Num : {num}</h2>
      <h2>Data : {data}</h2>
      <button onClick={()=> setNum(0)}>check</button>
      <button onClick={()=> setData(0)}>update</button>
    </div>
  )
}

export default LayoutEffect1
