
import './App.css';
import UserPost from './Components/UserPost';
import User from './Components/User';
import { Route, Routes,useLocation } from 'react-router-dom';

import DeleteDialog from './Components/DeleteDialog';
import DialogModal from './Components/DialogModal';
function App() {
  const category = ['edit','todos','todos/:id','todos/:id/delete','post', 'post/:postId','post/:id/delete',
          'album','album/:id','album/:id/delete','comment','comment/:id','comment/:id/delete','photo','photo/:id','photo/:id/delete'
]
  return (
    <div className="App">
   <Routes> 
     <Route path="/" exact element={<UserPost/>} />
    <Route path="/user/:userId"  element={<User/>}>
    {category.map((path, index) => (
            <Route path={path} key={index} element={<DialogModal/>} />
  ))}
    </Route>
    </Routes>
    </div>
  );
}

export default App;
