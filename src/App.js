
import './index.css'
import { Route, Link, Routes, Switch ,Outlet} from 'react-router-dom'

import Users from './User1'
export default function App() {
  return (
    
     <>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users/1">Users</Link>
        </li>
        
      </ul>
      <Routes>
      
        <Route path="/users/:id" element={<Users/>} />
        
        </Routes>
    </div>
    
 </>
 
  )
}


