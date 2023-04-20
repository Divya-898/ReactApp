import { Link, Outlet, useParams } from "react-router-dom";

export default function MainLayout() {
  const {id} = useParams();
  //console.log(id)
  return (
    <>
      <nav className="nav-bar">
        <ul>
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="about"> About</Link>
          </li>
          <li>
            <Link to="login"> Log In</Link>
          </li>
          <li>
            <Link to="signup"> Sign Up</Link>
          </li>
          <li>
            <Link to="products">Products</Link>
          </li>
          <li>
            <Link to="user">LiftingState</Link>
          </li>
          <li>
          <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="after">AfterLogin</Link>
          </li>
          <li>
            <Link to="/">FakeLogin</Link>
          </li>
          <li>
            <Link to='listofproduct'>List-Of-products</Link>
          </li>
          <li>
            <Link to="LoggedIn">FakeLogin1</Link>
          </li>
          <li>
            <Link to="store/">storeCart</Link>
          </li>
          <li>
            <Link to="context">context</Link>
          </li>
          <li>
            <Link to="statemanagement">stateLift</Link>
          </li>
          <li>
            <Link to="contextBtn">contextBtn</Link>
          </li>
          <li>
            <Link to="contextAssignment">contextAssignment</Link>
          </li>
        </ul>
      </nav>
      
    </>
  );
}
