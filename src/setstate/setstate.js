import React, { Component } from 'react'

export default class setstate extends Component {
    constructor(props) {
      super(props)
      this.state = {
         message:"simplelearn",
         sub:"subscribe",
      }
    }

    HandleEvent = ()=>{
        this.setState({
            message :"hit the bell icon",
            sub:"subscribed"
        });
    }
    ChangeEvent = ()=>{
        this.setState({
            message :"hit the icon",
            sub:"subscribed"
        });
    }
    SubscribeEvent = ()=>{
        this.setState({
            message :"hit the bell icon",
            sub:"subscribed"
        });
    }
    SubscribeEvent1 = ()=>{
        this.setState({
            message :"hit the bell icon1",
            sub:"subscribed"
        });
    }
   
  render() {
    return (
      <div className='App'>
        <h1 style={this.styles}>{this.state.message}</h1>
        <button type="button" onClick={this.HandleEvent}>{this.state.sub}</button>
        <button type="button" onClick={this.ChangeEvent}>{this.state.sub}</button>
        <button type="button" onClick={this.SubscribeEvent}>{this.state.sub}</button>
        <button type="button" onClick={this.SubscribeEvent1}>{this.state.sub}</button>
        
      </div>
    )
  }
}
