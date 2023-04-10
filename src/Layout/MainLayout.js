import { Link, Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <nav className="nav-bar">
        <ul>
          <li>
            <Link to="home"> Home</Link>
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
            <Link to="signin">FakeLogin</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
