import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  dropdown = (i) => {
    var navbar = document.getElementById('nav');

    if (!i) {
      if (navbar.className === '') {
        navbar.className = 'responsive';
      } else {
        navbar.className = '';
      }
    } else {
      navbar.className= '';
    }
  }
  render() {
    let loggedInText; 
    if (this.props.state.username) {
      loggedInText = (
        <div className="account">[{this.props.state.username}]</div>
      );
    } else {
      loggedInText = (<div></div>);
    }
    return(
      <nav id="nav">
        <Link to="/" onClick={() => this.dropdown(1)} className="title">Herddit</Link>
        <Link to="/posts" onClick={() => this.dropdown(0)}>Posts</Link>
        <Link to="/users" onClick={() => this.dropdown(0)}>Users</Link>
        {this.props.state.loggedIn ? <div></div> : <Link to="/register" onClick={() => this.dropdown(0)}>Register</Link>}
        <div className="right-icons">
          <div className="profile">
            {loggedInText}<i className="fa fa-user-circle fa-2x"></i>
          </div>
          <div className="icon" onClick={() => this.dropdown(0)}>
            <i className="fa fa-bars fa-2x"></i>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;