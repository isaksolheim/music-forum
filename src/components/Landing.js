import React from 'react';

function Landing(props) {
  return(
    <section className="landing">
      <h1>HERDDIT</h1>
      <p>Welcome to Herddit, please sign in below or log in as a guest.</p>
      
      <form className="login-form" onSubmit={props.submitHandler}>
        <label> 
          Username
          <input placeholder="username" type="text" name="name" onChange={props.usernameHandler} />
        </label>
        <label> 
          Password
          <input className="password" placeholder="password" type="password" name="name" onChange={props.passwordHandler} />
        </label>
        <input type="submit" value="Sign in" />
      </form>
    </section>
  );
}

export default Landing;