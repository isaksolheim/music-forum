import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './style/main.scss';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Posts from './components/Posts';
import Users from './components/Users';
import Register from './components/Register';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
      username: '',
      password: '',
      usernameInput: '',
      passwordInput: '',
    }

    this.submitHandler = this.submitHandler.bind(this);
    this.usernameHandler = this.usernameHandler.bind(this);
    this.passwordHandler = this.passwordHandler.bind(this);
  }

  submitHandler(e) {
    e.preventDefault();

    // check if login is correct
    var username = this.state.usernameInput;
    var password = this.state.passwordInput;

    axios.get('http://localhost:5000/users')
      .then(res => {
        var status = 0;
        for (var i = 0; i < res.data.length; i++) {
          if (res.data[i].username === username) {
            if (res.data[i].password === password) {
              this.setState({
                loggedIn: true,
                username: this.state.usernameInput,
                password: this.state.passwordInput
              });
              status = 1;
              break;
            } else {
              console.log('wrong password');
              break;
            }
          }
        }
        if (status) {
          console.log('login succeeded')
        } else {
          console.log('login failed')
        }
      });

  }

  usernameHandler(e) {
    this.setState({ usernameInput: e.target.value });
  }

  passwordHandler(e) {
    this.setState({ passwordInput: e.target.value });
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Navbar state={this.state} />
          <Route path="/" exact render={(props) => (
            <Landing {...props} 
              submitHandler={this.submitHandler} 
              usernameHandler={this.usernameHandler} 
              passwordHandler={this.passwordHandler} 
              state={this.state} 
            />
          )} />
          <Route path="/posts" exact render={(props) => (
            <Posts {...props} state={this.state} />
          )} />
          <Route path="/users" exact render={(props) => (
            <Users {...props} state={this.state} />
          )} />
          <Route path="/register" exact render={(props) => (
            <Register {...props} state={this.state} />
          )} />
        </Router>
      </div>
    );
  }
}

export default App;
