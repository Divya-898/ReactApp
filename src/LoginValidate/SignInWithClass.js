import React, { Component } from 'react'

export default class SignInWithClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         email:{name: 'email', value:'', error:''},
         password:{name: 'password', value:'', error:''},
         rememberMe: {name: 'rememberMe', value:false, error:''},
      }
    }
    
  render() {
    const{email, password,rememberMe} = this.state;
    return (
      <div>
        <div className="form-validation">
            <form onSubmit={this.onSubmit}>
              <h1>Login Form</h1>
              <div>
                <label>Email</label>
                <br/>
                <input type="email" name={email.name} value={email.value}
                onChange={this.onChange}/>
                <div style={{color:'red'}}>
                    {email.error.length > 0 && email.error}
                </div>
              </div>
              <br/>
              <div>
                <label>Password</label>
                <br/>
                <input  type="password" name={password.name} value={password.value}
                onChange={this.onChange}/>
                <div style={{color:'red'}}>
                    {password.error.length > 0 && password.error}
                </div>
              </div>
              <div>
                <label>
                <input type="checkbox" checked={rememberMe.value} name={rememberMe.name} value={rememberMe.value}
                onChange={this.onChange}/>
                Remember Me?
                </label>
              </div>
              <br/>
              <div>
                <button type="submit">submit</button>
              </div>
            </form>
        </div>
      </div>
    )
  }
  onChange = (e)=>{
    const name = e.target.name;
    let value = e.target.value;
    if(name !== this.state.email.name && name !== this.state.password.name){
      value = e.target.checked;
    }
    this.setState({[name]:{...this.state[name],value}});
  }

  validateForm =()=>{
    const {email,password} =this.state;
    let status = true;
    if(email.value.length === 0){
      status=false;
      this.setState({email:{...email,error:'please enter valid value'}})
    }else{
      this.setState({email:{...email,error:''}})
    }
    if(password.value.length === 0){
      status=false;
      this.setState({password:{...password,error:'please enter valid value'}})
    }else{
      this.setState({password:{...password,error:''}})
    }
    return status;
    }
   
 onSubmit = (e)=>{
    e.preventDefault();
    const validationstatus = this.validateForm();
    if(validationstatus === true){
      const {email,password,rememberMe} =this.state;
      const model = {
        email:email.value,
        password: password.value,
        rememberMe:rememberMe.value
      }
      console.log(model);
    }
 }
}
