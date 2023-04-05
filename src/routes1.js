import { useRoutes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";

import Wishlist from './loginValidation/Wishlist';
import SignUp from "./Pages/SignUp";
import AuthLayout from "./Layout/MainLayout";
import MainLayout from "./Layout/MainLayout";
import Login from './loginValidation/Login';
export default function Router() {
    let element = useRoutes([
        {
          element: <AuthLayout />,
          children: [
            { path: "login", element: <Login /> },
            { path: "signup", element: <SignUp /> },
            {path:'/wishlist/:id', element:<Wishlist/>},
            { path: "/", element: <Home /> },
            { path: "about", element: <About /> }
          ]
        },
        
      ]);
    
      return element;
    }
    
