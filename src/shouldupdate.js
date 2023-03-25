import React, { Component } from 'react'

export default class shouldupdate extends Component {
    constructor() {
      super()
      //this.changeState = this.changeState.bind(this)
      this.state = {
         name:"adil"
      }
      console.log("constructor called...")
    }
    changeState = ()=>{
        this.setState({
            name:"kumar"
        });
    }
shouldComponentUpdate(nextProps, nextState){
    console.log("shoul update");
    console.log(nextProps);
    console.log(nextState);
    return true;

}

getSnapshotBeforeUpdate(prevProps, prevState){
console.log("get snap");
console.log(prevProps)
console.log(prevState)
return "hello"
}
componentDidUpdate(prevProps, prevState, snapshot)
{
    console.log("componentdid")
    console.log(prevProps)
console.log(prevState)
console.log(snapshot)
}
  render() {
    console.log('render')
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h1>{this.props.city}</h1>
        <button type="button" onClick={this.changeState}>click</button>
      </div>
    )
  }
}
