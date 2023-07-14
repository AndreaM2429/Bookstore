import { Link } from 'react-router-dom';
import React from 'react';

function Navbar() {
  return (
    <header>
      <nav className="d-flex navigation">
        <ul className="d-flex">
          <li><h1>Bookstore</h1></li>
          <li>
            <Link to="/">Books</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
