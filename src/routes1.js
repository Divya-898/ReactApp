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
import { Navigate,Outlet } from 'react-router-dom';
export default function Router() {
      const routes = (isLoggedIn) => [
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
            {path: '/signin',
            element: !isLoggedIn ? <AfterLogin /> : <Navigate to="listofproduct" />,
            children: [
              { path: 'LoggedIn', element: <FakeLogin /> },
              { path: '/listofproduct', element: <FakseStore /> },
            ],},
           
            
    
          ]
        },
      ];
      
     return routes;
    }
  










    
