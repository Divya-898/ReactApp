import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import { BrowserRouter } from 'react-router-dom';
import App from './App';
//import Sign from './page/sign'
//import SignInWithClass from './LoginValidate/SignInWithClass';
//import User from './arrow'
//import Hellomessage from './hellomessage';
//import House from './house';
//import Pure  from './pure';
//import Hoc from './hoc';
//import Student from './student'
//import Student from './listcomponent/Student';
//import Employee from './Employee';
//import Customer from './customer';
//import Clickfunction from './clickfunction';
//import Style from './stylecomponent/style';
//import BindEvent from './bindEvent';
//import Mounting from './mounting';
//import Update1 from './Components/update1';
//import Myclass from './arrow';
//import Myclass from './propWithClass';
//import Shouldupdate from './shouldupdate';
//import Unmount from './unmount';
//import MountingWithUpdate from './lifecylecomponents/mountingWithUpdate';
//import WillUnmount from './lifecylecomponents/Unmount';
//import Parent from './parent';
//import Refs from './LoginValidate/Refs';
//import Setstate from './setstate/setstate';
//import FindDomNode from './Componentapi/FindDomNode';
//import ForceUdate from './Componentapi/ForceUdate';
import reportWebVitals from './reportWebVitals';
import SignInWithClass from './LoginValidate/SignInWithClass';
import HomePage from './page/Home';
import Route from './route-demo/route';

//const root = ReactDOM.createRoot(document.getElementById('root'));
const root = ReactDOM.createRoot(document.getElementById('root'));

//var a = "divya"
root.render(
  <React.StrictMode>
  
  
  <App/>
   
  
  {/* 
  <Setstate/>
   <SignInWithClass/>
    <App/>
   </BrowserRouter>
  
    
    <Setstate/>
  <FindDomNode/>
  <ForceUdate/>
    <MountingWithUpdate/>
   <WillUnmount/>
    
    <Refs/>
    <BindEvent/>
     <Shouldupdate/>
    <App />
    <BindEvent/>
    <Parent/>
    <Customer name="amit" age={23}/>
    <Employee name="learning"/>
     <User name="divya"/>
  <Myclass name="adil"/>
  <Myclass name="amit"/>
    <Hellomessage name={a} age="20">
      <h1>children1 props</h1>
    </Hellomessage>
    <Hellomessage name="nidhi" age={12}>
    <h1>children2 props</h1>
    </Hellomessage> 
    <House/>
    <App2 />
    <Pure/>
    <Hoc/>*/}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
  