
import React, { useMemo, useState } from 'react'

function AnotherUseMemo() {
    const [myNum, setMyNum] = useState(0);
    const[show, setShow] =useState(false)
    const getvalue = () =>{
        return setMyNum(myNum+1)
    }
    const countNumber = (num) =>{
        console.log("counter number",num);
        for(let i =0; i<=10000000000 ; i++){}
        return num;
    };

   const checkData = useMemo(()=>{
        return countNumber(myNum)
    },[myNum])
    
  return (
    <div>
      <button onClick={getvalue} style={{backgroundColor: 'red'}}>counter</button>
    <p> my new number: {checkData}</p>
    <button onClick={()=> setShow(!show)}>{show ? "you clicked me" : "click me plz"}</button>
    </div>
  )
}

export default AnotherUseMemo
