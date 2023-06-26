import logo from './logo.svg';
import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import LinaerStepper from './LinearStepper';
function App() {
  return (
    <>
    <CssBaseline/>
    <Container component={Box} p={4}>
        <Paper component={Box} p={3}>
          <LinaerStepper />
        </Paper>
        </Container>
    </>
  );
}

export default App;
