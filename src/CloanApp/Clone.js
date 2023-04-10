/*import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Login from './loginValidation/Login';
import Wishlist from './loginValidation/Wishlist';
import CompA from './useContext/CompA';
import { createContext } from 'react';
import ControlForm from './controlform/ControlForm';
import SearchParam from './SearchParam/SearchParam';
import Home from './loginValidation/route-demo/Home';
import Navbar from './loginValidation/route-demo/Navbar';
import Products from './loginValidation/route-demo/Products';
import About from './loginValidation/route-demo/About';
import Shirts from './loginValidation/route-demo/Shirts';
import Jeans from './loginValidation/route-demo/Jeans';
import { useRoutes } from "react-router-dom";
export const NameContext = createContext()

function App() {
  let element = useRoutes([
   
    {
      
      path: "/",
      element: <Login />,
      
    },
    { path:'/wishlist/:id' ,element:<Wishlist/> },
    {element:<Navbar/>,
    children:[
      {path:'/',
      element:<Home/>,
    },
      {path:'/product',
      element:<Products/>,
      
    },{
       path: '/about',
       element:<About/>
    },]
      /*children: [
        {
          path: "shirts",
          element: <Shirts />,
        },
        { path: "jeans", element: <Jeans /> },
      ],
    }


  ]);

  return element

  
     {/*<h1>
    <NameContext.Provider value={'ram'}>
    <CompA/>
  </NameContext.Provider>
    </h1>*
  
   {/*<Routes>
     <Route path='/' element={<Login/>}/>
     <Route path='/wishlist/:id' element={<Wishlist/>}/>
     <Route path='/search' element={<SearchParam/>}/>
     

      children:   </Routes>
  <Navbar/>
  <Routes>
  <Route path='/home' element={<Home/>}/>
  <Route path='/' element={<Home/>}/>
     
     <Route path='/product' element={<Products/>}>
    
     <Route index element={<Shirts/>}></Route>
     <Route path='shirts' element={<Shirts/>}/>
     <Route path='jeans' element={<Jeans/>}/>
     </Route>

  </Routes>


}*/
/*import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Login from './loginValidation/Login';
import Wishlist from './loginValidation/Wishlist';
import CompA from './useContext/CompA';
import { createContext } from 'react';
import ControlForm from './controlform/ControlForm';
import SearchParam from './SearchParam/SearchParam';
import Home from './loginValidation/*/

/*import { BrowserRouter } from "react-router-dom";

import Router from './routes1'
import { useRoutes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Shirts from './loginValidation/route-demo/Shirts';
import Wishlist from './loginValidation/Wishlist';
import SignUp from "./Pages/SignUp";
import AuthLayout from "./Layout/MainLayout";
import MainLayout from "./Layout/MainLayout";
import Login from './loginValidation/Login';
import Products from "./loginValidation/route-demo/Products";
import Jeans from "./loginValidation/route-demo/Jeans";
import User1 from "./LiftingState/User1";
import AfterLogin from "./FakeStore/AfterLogin";
import FakeLogin from "./FakeStore/FakeLogin";
import FakseStore from "./FakeStore/FakseStore";
export default function App() {
  
  let element = useRoutes([
    {
      element: <MainLayout />,
      children: [
        { path: "login", element: <Login /> },
        { path: "signup", element: <SignUp /> },
       
      
        {path:'/wishlist/:id', element:<Wishlist/>,},
        {path:'user', element:<User1/>},
        {path:'products', element:<Products/>,
       children:[
        {path:'shirts', element:<Shirts/>,},
        {path:'jeans', element:<Jeans/>,},
       ]
      
      },
        { path: "/", element: <Home /> },
        { path: "about", element: <About /> },

        {path: "signin", element: <AfterLogin />} ,
      
        { path: "LoggedIn", element: <FakeLogin /> },
        { path: "listofproduct", element: <FakseStore /> }, 
        

      ]
    },
    
  ]);

  return element;
}
*/
//import routes from './routes';
//import { useRoutes,useSelector } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom'

import FakseStore from './FakeStore/FakseStore';
import FakeLogin from './FakeStore/FakeLogin';
import MainLayout from "./Layout/MainLayout";
import AfterLogin from './FakeStore/AfterLogin';
export default function App() {

  

  return (
    <>
    <MainLayout/>
      <Routes>
      <Route path='/' element={<AfterLogin/>}/>
     <Route path='/listofproduct' element={<FakseStore/>}/>
     <Route path='/LoggedIn' element={<FakeLogin/>}/>
     
  </Routes>
    </>
  );
}
