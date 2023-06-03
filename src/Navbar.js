import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
      <ul>
      <li>
          <Link className="button" to="/">Home</Link>
        </li>
        <li>
          <Link className="button" to="/profile">Profile</Link>
        </li>
        <li>
          <Link className="button" to="/create-masqs">Create Masqs</Link>
        </li>
        <li>
          <Link className="button" to="/process-video">Process Video</Link>
        </li>
        <li>
          <Link className="button" to="/about">About</Link>
        </li>
      </ul>
  );
}

export default Navbar;