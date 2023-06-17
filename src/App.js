
import './App.css';
import UserPost from './Components/UserPost';
import User from './Components/User';
import { Route, Routes,useLocation } from 'react-router-dom';

import DeleteDialog from './Components/DeleteDialog';
import DialogModal from './Components/DialogModal';
function App() {
  const location = useLocation();
  const background = location.state && location.state.background;
  return (
    <div className="App">
   <Routes  location={background || location}> 
     <Route path="/" exact element={<UserPost/>} />
    <Route path="/user/:userId"  element={<User/>}>
    <Route path="edit" element={<DeleteDialog />} />
    <Route path="todos" element={<DialogModal />} />
    <Route path="todos/:id" element={<DialogModal />}>
    <Route path="delete" element={<DeleteDialog />} />
    </Route>
    <Route path="post" element={<DialogModal />}/>
    <Route path="post/:postId" element={<DialogModal />}>
    <Route path="delete" element={<DeleteDialog />} />
    </Route>
    <Route path="album" element={<DialogModal />}/>
    <Route path="album/:albumId" element={<DialogModal />}>
    <Route path="delete" element={<DeleteDialog />} />
    </Route>
    <Route path="comment" element={<DialogModal />}/>
    <Route path="comment/:commentId" element={<DialogModal />}>
    <Route path="delete" element={<DeleteDialog />} />
    </Route>
    <Route path="photo" element={<DialogModal />}/>
    <Route path="photo/:photoId" element={<DialogModal />}>
    <Route path="delete" element={<DeleteDialog />} />
    </Route>
    </Route>
    </Routes>
    </div>
  );
}

export default App;
