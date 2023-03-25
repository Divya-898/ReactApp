import React from 'react'
import './App.css'
//event with function component
/*function clickfunction() {
    function HelloFunction(){
        alert("hello brother")
    }
  return (
    <div className='App'>
      <input type="button" value="click" onClick={HelloFunction}></input>
    </div>
  )
}
*/

//event with class
/*
export default class clickfunction extends Component {

         HelloFunction(){
            alert("hello brother")
        }
  render() {
    return (
      <div className='App'>
      <input type="button" value="click" onClick={this.HelloFunction}></input>
        
      </div>
    )
  }
}*/
const HelloFunction = (name)=>{
    alert("hello" + name)
}

function clickfunction() {
    return (
        <div className='App'>
          <input type="button" value="click" onClick={()=> HelloFunction("divya")}></input>
        </div>
        )
}

export default clickfunction



