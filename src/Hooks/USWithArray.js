import React, { useState } from 'react'

function USWithArray() {
    let num = [11,22,33,44];
   let[numbers, setNumbers] = useState(num)
   /*let changeState = () => {
    setNumbers([55,66,77,88]);
   }*/
//add new number
   let changeState = () => {
    setNumbers(previousState => {
          return[
            ...previousState,
            //Math.random()*50
            Math.floor(Math.random()*50)
            //98,
          ]
    });
   }
  return (
    <div>
      <ul>
        {numbers.map((n,i) =><li key={i}>{n}</li>)}
      </ul>
      <button onClick={changeState}>update</button>
    </div>
  )
}

export default USWithArray
