import React, { createContext, useState } from 'react'
import ContextChild from './ContextChild'
import ContextSibling from './ContextSibling'
export const contextTheme = createContext();
function ContextParent() {
    const[count, setCount] = useState(0);
    var counter = 1;
    console.log('parent context')
    const btnHandle = ()=>{
        //setCount(count+1)
        console.log("parent counter" ,counter+1)
    }
  return (
    <div>
      <div>
      <contextTheme.Provider value={{counter}}>
      <ContextChild  ></ContextChild>
      <ContextSibling ></ContextSibling>
      </contextTheme.Provider>
      <h1>{count}</h1>
      <button onClick={btnHandle}>parent state</button>
    </div>
    </div>
  )
}

export default ContextParent
