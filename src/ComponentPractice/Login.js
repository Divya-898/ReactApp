import { useState } from "react"

function Signup() {
    const [formData, setFormData] = useState({
        title: '', // required
        completed: '', // required
      
    })

    function handleSubmit(e) {
        e.preventDefault()
        fetch('http://localhost:3500/comments', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    function handleChange(e) {
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    return (
        <div>
            <h1>Signup Form</h1>
            <form className='login-form' onSubmit={e => handleSubmit(e)}>
                <input type='text' placeholder='name' value={formData.name} name='name' onChange={e => handleChange(e)} ></input>
                <input type='text' placeholder='body' value={formData.body} name='body' onChange={e => handleChange(e)} ></input>
               
                <button className='login-btn' type='submit'>Sign Up</button>
            </form>
        </div>
    )
}

export default Signup