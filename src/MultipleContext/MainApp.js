import React, { createContext, useState } from 'react'
import Header from './Header'
import Home from './Home'
import CustomContext from './CustomContext';

export const NotificationContext = createContext();
export const ThemeContext =  createContext();
export const FontSizeContext = createContext();
export const TrailContext = createContext();
export const CustomContext1 = createContext();
export default function MainApp() {
    const[notification, setNotifications] = useState([]);
    const[theme, setTheme] = useState({background: "blue"});
    const[fontSize, setFontSize] = useState(16);
    const users = "divya"
  const emails = [
    { id: 1, text: "My first email" },
    { id: 2, text: "My second email" }
  ];
    const name ="str";
  return (
    <div>
    <NotificationContext.Provider value={{notification, setNotifications}}>
        <ThemeContext.Provider value={{theme, setTheme}}>
            <FontSizeContext.Provider value={{fontSize,setFontSize}}> 
            <Home/>
            </FontSizeContext.Provider>
        </ThemeContext.Provider>
    </NotificationContext.Provider>
    <CustomContext1.Provider value={users}>
      <CustomContext></CustomContext>
    </CustomContext1.Provider>
    
     
    </div>
  )
}
