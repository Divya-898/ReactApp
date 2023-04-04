import React, { useState } from 'react'

function MultipleFunction() {
   const[data, setData] = useState({
    name:"",
    email:"",
   })
const handleChange = (e) =>{
    const name = e.target.name;
    const value = e.target.value
  console.log(name)
  console.log(value);
  setData((prev)=>{
      return{
        ...prev,
        [name]:value
      }
  })
}

  return (
    <div>
      <form>
            <label htmlFor=''>
                Enter Name:
            </label>
            <input type="text"  name="name" value= {data.name}  onChange={handleChange} placeholder='Enter your name'/>
            <br/><br/>
            <label htmlFor=''>
                Enter Email:
            </label>
            
            <input type="text"  name="email"  value= {data.email} onChange={handleChange}  placeholder='Enter your Email'/><br/><br/>
            <input type="submit" value="submit"/>
          </form>
    </div>
  )
}

export default MultipleFunction
