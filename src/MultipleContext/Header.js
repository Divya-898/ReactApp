import React, { useContext } from 'react'
import { FontSizeContext, NotificationContext, ThemeContext } from './MainApp';

export default function Header() {
   const{notification, setNotifications} = useContext(NotificationContext);
   const{theme, setTheme} = useContext(ThemeContext);
   const{fontSize, setFontSize} = useContext(FontSizeContext);
  return (
    <>
    <h1>header section</h1>
    <header style={{backgroundColor: theme.background, fontSize:fontSize + "px"}}>
        <p> Notification number {notification.length}</p>
        <button onClick={()=>{
            const newNotification = [...notification]
             setNotifications(newNotification);
        }}>Add Notification</button>
        <button onClick={()=>{
            {setTheme({
                background:theme.background === "lightgray" ? "darkgray" : "lightgray"
            })
        }}}>change theme</button>
        <button onClick={()=>{
            setFontSize(fontSize+1)
        }}>Increase the fontsize</button>  
    </header>
    </>
   
  )
}
 