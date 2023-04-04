


import { BrowserRouter as Routes, Route } from "react-router-dom";

export default function route() {
  return (
  <Routes>
    <main>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
  <Route path="/" render={() => <h1>Welcome!</h1>} />
    </main>
</Routes>
  );
}