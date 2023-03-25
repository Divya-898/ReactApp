import React, { Component } from 'react'
//import './ModuleStylesheet1.css'
import Style from './ModuleStylesheet1.module.css'
export default class ModuleStylesheet1 extends Component {
  render() {
    return (
      <div>
        <h1 className={Style.header}>module style2</h1>
      </div>
    )
  }
}
