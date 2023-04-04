import React, { useEffect, useRef } from 'react'

function HookUseRef() {
   //const newRef = useRef();
   const firstRef = useRef();
   const lastRef = useRef();
   useEffect(() =>{
    console.log(firstRef);
    console.log(lastRef);
   firstRef.current.focus();
    //console.log(newRef.current.innerHTML)
   })

   const handleSubmit = (e)=>{
        e.preventDefault()
        console.log("fullname =" , firstRef.current.value, lastRef.current.value)
   }

   /*const handleheading = () =>{
    newRef.current.style.color = 'red';
    newRef.current.style.fontFamily = 'cooper';
    newRef.current.hidden = true;
   }*/
  return (
    <div>
      {/*<h1 ref={newRef}>Learning react</h1>
      <button onClick={handleheading}>click</button>*/}
      <form onSubmit={handleSubmit}> 
        <label htmlFor=''>Enter First Name:</label>
        <input type='text' ref={firstRef} placeholder='first name' />
        <br/><br/>
        <label htmlFor=''>Enter Last Name:</label>
        <input type='text' ref={lastRef} placeholder='last name' />
        <br/><br/>
        <input type="submit" value="submit" />
      </form>
    </div>
  )
}

export default HookUseRef
