import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { QueryClient, QueryClientProvider } from 'react-query';
import UseSnackbar from './ComponentPractice/Usenavbar';
import { BrowserRouter } from 'react-router-dom';
import Profile from './ComponentPractice/Profile';
import UserIntro from './ComponentPractice/UserIntro';
import Signup from './ComponentPractice/Login';
import SCrollbody from './ComponentPractice/dailog';
import FormDialog from './ComponentPractice/EditPost';


const queryClient = new QueryClient()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Signup/>
  // // <Profile/>
  
  
 <BrowserRouter>
    <App />
    </BrowserRouter> 
// {/* <SCrollbody/> */}
   
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
