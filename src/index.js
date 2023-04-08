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
import Context from './AnotherUseContext/Context';
import Home from './loginValidation/route-demo/Home';
import LifeCycleWithHook from './LifeCycle/LifeCycleWithHook';
import SearchField from './useSubmit/useSubmit';
import FormData from './FormData/FormData';
import LayoutEffect1 from './UseLayoutEffect/LayoutEffect1';
import Test from './UseLayoutEffect/Test';
import App1 from './UseLayoutEffect/Test1';
import EventLayout from './UseLayoutEffect/EvenLayout';
import UseMemo from './useMemo/UseMemo';
import AnotherUseMemo from './useMemo/AnotherUseMemo';
import ParentCallback from './UseCallback/ParentCallback';
import FakseStore from './FakeStore/FakseStore';
import FakeLogin from './FakeStore/FakeLogin';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/*<BrowserRouter>
      <div className="App">
        <h1>useRoutes Example</h1>
    <App/>
      </div>
    </BrowserRouter>
 <LifeCycleWithHook/>

<UseEffect1/>
<LayoutEffect1/>
<Test/>
<EventLayout/>
<UseMemo/>
<AnotherUseMemo/>
<FakseStore/>
*/}

<FakeLogin/>




   {/* <USComponent></USComponent>
    <FormData/>
   <SearchField/>
    <USWithObject></USWithObject>
    <USWithArray></USWithArray>
    <FunctionEffect/>
   <ControlForm/>
   <MultipleClass/>
   <MultipleFunction/>
   <HookUseRef/>
   <HookUseRef2/>
    <UseReducerHook/>
   
   */}
  
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
