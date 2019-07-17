import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  dropdown = () => {
    var navbar = document.getElementById('nav');
    if (navbar.className === '') {
      navbar.className = 'responsive';
    } else {
      navbar.className = '';
    }
  }
  render() {
    let loggedInText = (
      <div className="account">My Account ({this.props.state.username})</div>
    );

    let signedInText = (
      <div className="account">Sign in</div>
    );
    return(
      <nav id="nav">
        <Link to="/">Herddit</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/users">Users</Link>
        <Link to="/register">Register</Link>
        <Link to="/">{this.props.state.loggedIn ? loggedInText : signedInText}</Link>
        <div className="icon" onClick={this.dropdown}>
          <i className="fa fa-bars"></i>
        </div>
      </nav>
    );
  }
}

export default Navbar;