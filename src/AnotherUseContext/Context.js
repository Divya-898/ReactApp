import React, { Component } from 'react'
import { Button} from 'react-bootstrap';
const ThemeContext = React.createContext('light');  
  
export default class Context extends Component{  
  render() {  
    /* Use a ContextProvider to pass the current theme, which allows every component to read it, no matter how deep it is. Here, we are passing the "dark" theme as the current value.*/  
  
    return (  
      <ThemeContext.Provider value="dark">  
        <Toolbar />  
      </ThemeContext.Provider>  
    );  
  }  
}  
  
// Now, it is not required to pass the theme down explicitly for every component.  
function Toolbar(props) {  
  return (  
    <div>  
      <ThemedButton />  
    </div>  
  );  
}  
  
class ThemedButton extends React.Component {  
  static contextType = ThemeContext;  
  render() {  
    return <Button theme={this.context} />;  
  }  
}  