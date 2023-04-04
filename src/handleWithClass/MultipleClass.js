import React, { Component } from 'react'

export default class MultipleClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'adil',
         email:'tiwaridiv',
      }
    }
    
    /*handlename = (e) =>{
     this.setState({
        name:e.target.value
     })
    }
    handleeamil = (e) =>{
        this.setState({
           email:e.target.value
        })
       }*/
       //common handle method
       handleChange = (e) =>{
        console.log(e.target.value)
        console.log(e.target.name)
        /*this.setState({
           email:e.target.value
        })*/
        const name =e.target.name;
        const value = e.target.value
        this.setState({
            //[e.target.name]: e.target.value
            [name]:value
        })
       }
  render() {
    return (
        <div>
          <form>
            <label htmlFor=''>
                Enter Name:
            </label>
            <input type="text" value={this.state.name} name="name" onChange={this.handleChange} placeholder='Enter your name'/>
            <br/><br/>
            <label htmlFor=''>
                Enter Email:
            </label>
            
            <input type="text" value={this.state.email} name="email" onChange={this.handleChange} placeholder='Enter your Email'/><br/><br/>
            <input type="submit" value="submit"/>
          </form>
        </div>
      )
    }
}
