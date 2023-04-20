import React, { createContext, useState } from 'react'
import GetEmaple from './GetEmaple';

export const ExampleContext = createContext();
export default function ExampleStore() {
    const [objectValue, setObjectValue] = useState(null);
    const getDay1 = (item) =>{
        console.log(item)
        setObjectValue(item)
    }
   
  return (
    <div>
    <ExampleContext.Provider value={{getDay1:getDay1}}>
    <GetEmaple></GetEmaple>
    </ExampleContext.Provider>
    </div>
  )
}
