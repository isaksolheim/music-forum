import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
  let loggedInText = (
    <p>Logged in as: {props.state.username}</p>
  );
  return(
    <nav>
      <Link to="/">Home</Link>
      <Link to="/posts">Posts</Link>
      <Link to="/users">Users</Link>
      <Link to="/register">Register</Link>
      {props.state.loggedIn ? loggedInText : <p>Logged out</p>}
    </nav>
  );
}

export default Navbar;