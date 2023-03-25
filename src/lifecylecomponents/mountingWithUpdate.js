import React, { Component } from 'react'

export default class mountingWithUpdate extends Component {
    constructor(){
        super();
        this.state = {
            name: "adil"
        }
        console.log("constructor")
    }
   
  /*render() {
    console.log("render")
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h1>{this.props.city}</h1>
      </div>
    )
  }*/
  static getDerivedStateFromProps(props, state){
    console.log("getderived")
    console.log(props)
    console.log(state)
    return null;

}
componentDidMount(){
    console.log("componetdidmount")
}
changeState = ()=>{
  this.setState({
      name:"kumar"
  });
}
shouldComponentUpdate(nextProps, nextState){
console.log("should update");
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
console.log("componentdid update")
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