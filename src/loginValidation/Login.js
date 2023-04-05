import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const user = [
    {    id:1,
        email:"divya",
        password:"divya",
    },
   
]
//console.log(user[0].password)
  //const emailRegex =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
 /* const handleName = (e) => {
    let password = e.target.value;
    if (password.value != user[0].password) {
      setNameError(true);
    } else {
      setNameError(false);
    }
    setPassword(password);
  };
  const handleEmail = (e) => {
    //get email
    let email = e.target.value;
    if (email.value != user[0].email) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    setEmail(email);
  };*/

  const handleSubmit = (e) => {
    e.preventDefault();
    //alert(e.target[0].value + " " + e.target[1].value)
    let password = e.target[0].value;
    if (password.value != user[0].password) {
      setNameError(true);
    } 
    else {
      setNameError(false);
    }
    let email = e.target[1].value;
    if (email.value != user[0].email) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    if (email == user[0].email  && password == user[0].password) {
      //alert("!Form has been submitted...");
      //alert("name=" + name + " email= " + email);
        localStorage.setItem('getvalue', user[0].email);
     // console.log(user)
     const user1 = user[0].email
      navigate(`/wishlist/${user1}`);
        
    }
  };
  return (
    <div>
      <div className="form-validation">
        <h1>Form Validation</h1>
        <form onSubmit={handleSubmit}>
        <label htmlFor="">Enter Email:</label>
          <input
            type="text"
            name="email"
           // onChange={handleEmail}
            value={email}
          />
          <br />
          {emailError ? (
            <span style={{ color: "red" }}>Invalid Email</span>
          ) : (
            ""
          )}
          <br />
          <br />
          <label htmlFor="">Enter password:</label>
          <input type="text" name="name" //onChange={handleName}
           value={password} />
          <br />
          {nameError ? (<span style={{ color: "red" }}>Invalid password</span>) : (" ")}
          <br />
          <br />
          
         
          <input type="submit" value="submit" />
        </form>
      </div>
    </div>
  );
}

export default Login;