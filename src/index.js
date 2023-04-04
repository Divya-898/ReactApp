import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import USComponent from './Hooks/USComponent';
import USWithObject from './Hooks/USWithObject';
import USWithArray from './Hooks/USWithArray';
import FunctionEffect from './useEffect/functionEffect';
import ControlForm from './controlform/ControlForm';
import MultipleClass from './handleWithClass/MultipleClass';
import MultipleFunction from './handleWithFunction/MultipleFunction';
import HookUseRef from './HookUseref/HookUseRef';
import HookUseRef2 from './HookUseref/HookUseRef2';
import UseReducerHook from './useReducer/useReducerHook';
import UseEffectWithprops from './useEffectWithProps/UseEffectWithprops';
import UseEffect1 from './useEffectWithProps/useEffect1';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <App />
    </BrowserRouter>
   {/* <USComponent></USComponent>
    <USWithObject></USWithObject>
    <USWithArray></USWithArray>
    <FunctionEffect/>
   <ControlForm/>
   <MultipleClass/>
   <MultipleFunction/>
   <HookUseRef/>
   <HookUseRef2/>
   */}
   <UseReducerHook/>
   <UseEffect1/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
