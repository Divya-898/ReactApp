import React, { useReducer, useState } from 'react'
import { Navigate } from "react-router-dom";
function UseReducerHook() {
    const initialState =0;
    const reducer = (state, action)=>{
          switch(action){
            case 'increment' :
                return state+1;
            case 'decrement' :
                return state-1;   
            case 'reset' :
               return initialState;    
            default :
               return state;
        }
    }
   const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
        <h1>count = {count}</h1>
        <button onClick={()=> dispatch('increment')}>Increment</button>
        <button onClick={()=> dispatch('decrement')}>decrement</button>
        <button onClick={()=> dispatch('reset')}>reset</button>
       
    </>
   
  )
}

export default UseReducerHook
