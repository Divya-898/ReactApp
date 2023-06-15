import logo from './logo.svg';
import './App.css';
import UserPost from './Components/UserPost';
import User from './Components/User';
import { Route, Routes,useLocation } from 'react-router-dom';
import EditTodos from './Components/EditTodos';
import EditInfo from './Components/EditInfo';
import DialogModal from './Components/SucDialog';
import DeleteDialog from './Components/DeleteDialog';
function App() {
  const location = useLocation();
  const background = location.state && location.state.background;
  return (
    <div className="App">
   <Routes  location={background || location}> 
     <Route path="/" exact element={<UserPost/>} />
     
    <Route path="/user/:userId"  element={<User/>}>
    <Route path="todos/:id" element={<DialogModal />}>
    <Route path="delete" element={<DeleteDialog />} />
    </Route>
    <Route path="edit" element={<DeleteDialog />} />
    <Route path="todos" element={<DialogModal />} />
    <Route path="post" element={<DialogModal />} />
    <Route path="post/:postId" element={<DialogModal />} />
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

