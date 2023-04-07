import React, { useEffect, useLayoutEffect, useState} from 'react'

const EventLayout = () => {
    const [number, setNumber] = useState(0);
    const count = 0;
   useLayoutEffect(() => {
    
      
       console.log(setNumber(number+1)) ;
        //console.log(number);
      
    }, [number === count]);
    
    console.log(number);
  
    return (
      <>
        <h3>{number}</h3>
        <button onClick={() => setNumber(number)}>Test</button>
      </>
    )
  }
  
  export default EventLayout;