import React from 'react';
import axios from 'axios';

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    }

    this.registerHandler = this.registerHandler.bind(this);
    this.inputHandler = this.inputHandler.bind(this);
  }

  registerHandler(e) {
    e.preventDefault();

    var user = {
      "username": this.state.username,
      "password": this.state.password
    }

    axios.post('http://localhost:5000/users/add', user)
      .then(res => console.log(res.data));
  }

  inputHandler(e) {
    if (e.target.name === 'username') {
      this.setState({ username: e.target.value });
    } else if (e.target.name === 'password') {
      this.setState({ password: e.target.value });
    }
  }

  render() {
    return(
      <section>
        <h1>Register</h1>
        <p>Enter a username and password below.</p>

        <form onSubmit={this.registerHandler}>
          <label>
            Username
            <input type="text" name="username" onChange={this.inputHandler} />
          </label>
          <br />
          <label>
            Password
            <input type="text" name="password" onChange={this.inputHandler} />
          </label>
        <input type="submit" value="Submit" />
        </form>
      </section>
    );
  }
}

export default Register;