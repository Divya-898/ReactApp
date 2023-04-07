import React, { useEffect, useLayoutEffect, useRef } from 'react'

const App1 = () => {
  const inputRef = useRef(null)
  useEffect(()=>{
    inputRef.current.value = "another user"
  });

  useLayoutEffect(()=>{
    //inputRef.current.value = "second user"
    console.log(inputRef.current.value)

  });
  return(
    <div>
      <input type="text" value="TheCoder" ref= 
        {inputRef}/>
    </div>
  );
}
export default App1;