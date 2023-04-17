import React, { createContext, useState } from 'react'
import ChildContext from './ChildContext'
import NextChild from './NextChild';
export const globalInfo =createContext();

export default function SuperParent() {
    const[color, setColor] = useState('red');
    const [day,setDay]= useState("manday");
    const getDay = (item) =>{
        console.log(item)
        setDay(item)
    }
  return (
    <globalInfo.Provider value={{appcolor: color, getDay:getDay}}>
    <div>
    <h1>Main Component  {day}</h1>
      <ChildContext/>
      <NextChild/>
    </div>
    </globalInfo.Provider>
  )
}
