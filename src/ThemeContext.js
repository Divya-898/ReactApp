import React from 'react';
import { Button } from 'react-bootstrap'

export const themes = {
    light: {
      foreground: '#000000',
      background: '#eeeeee',
    },
    dark: {
      foreground: '#000000',
      background: '#000000',
    },
  };
  
  export const ThemeContext = React.createContext(
    themes.dark // default value
  );
export default class ThemeContext1 extends React.Component {
  render() {
    // Use a Provider to pass the current theme to the tree below.
    // Any component can read it, no matter how deep it is.
    // In this example, we're passing "dark" as the current value.
    return (
        <>
        <h1>hello themecontext</h1>
      <ThemeContext.Provider value="dark">
       
      </ThemeContext.Provider>
      </>
    );
  }
}

// A component in the middle doesn't have to
// pass the theme down explicitly anymore.
function Toolbar(props) {
  return (
    <div>
    <h1>hello Toolbar</h1>
      <ThemedButton />
    </div>
  );
}

class ThemedButton extends React.Component {
  // Assign a contextType to read the current theme context.
  // React will find the closest theme Provider above and use its value.
  // In this example, the current theme is "dark".
  static contextType = ThemeContext;
  //
  render() {
    console.log("hello themwbtn");
    return <Button theme={this.context} >click</Button>;
  }
}