import React, { Component } from 'react'
//import './ModuleStylesheet.css'
import Style from './ModuleStylesheet.module.css'
export default class ModuleStylesheet extends Component {
  render() {
    return (
      <div>
        <h1 className={Style.header}>module style1</h1>
      </div>
    )
  }
}
