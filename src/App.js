import logo from './logo.svg';
import './App.css';
import UserPost from './Components/UserPost';
import User from './Components/User';
import { Route, Routes,useLocation } from 'react-router-dom';
import EditTodos from './Components/EditTodos';
import EditInfo from './Components/EditInfo';
function App() {
  const location = useLocation();
  const background = location.state && location.state.background;
  return (
    <div className="App">
     <Routes  location={background || location}>
     <Route path="/" exact element={<UserPost/>} />
     
    <Route path="/user/:userId"  element={<User/>}>
    <Route path="edit/:id" element={<EditInfo />} />
    </Route>
    </Routes>
    </div>
  );
}

export default App;
// import "./App.css";
// import UserPost from './Components/UserPost';
// import User from './Components/User'
// import { Route, Routes, useLocation } from "react-router-dom";
// import { Main } from "./Components/Main";
// import { Modal } from "./Components/Modal";
// // import { Main } from "./Components/Main";
// // import { Modal } from "./Components/Modal";

// function App() {
//   // const location = useLocation();
//   // const background = location.state && location.state.background;

//   return (
//     <div className="App">

//       <Routes>
//       <Route path="/" exact element={<UserPost/>} >
      
      
//       </Route>
//       <Route path="/user/:userId"  element={<User/>}/>
         
//       <Route path="/modal4/:id" element={<Modal />} />
//       </Routes>
      
//         <Routes>
//           <Route path="modal" element={<Modal />} />
//         </Routes>
     
//     </div>
//   );
// }

