import React, { useState } from 'react'

function ControlForm() {
    const [name, setName] = useState("")
    const handleSubmit = (e) =>{
        e.preventDefault();
          console.log(e.target[0].value)
          
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor=''>
            Enter Name:
        </label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value.toLowerCase().substring(0,10).replace('&','-'))}/>
        <br/><br/>
        <input type="submit" value="submit"/>
      </form>
    </div>
  )
}

export default ControlForm
