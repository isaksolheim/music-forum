import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return(
    <nav>
      <Link to="/">Home</Link>
      <Link to="/posts">Posts</Link>
      <Link to="/users">Users</Link>
    </nav>
  );
}

export default Navbar;