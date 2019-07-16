import React from 'react';

function Landing(props) {
  return(
    <section>
      <h1>HERDDIT</h1>
      <p>Welcome to Herddit</p>
      <form onSubmit={props.submitHandler}>
        <label> 
          Username:
          <input type="text" name="name" onChange={props.usernameHandler} />
        </label>
        <label> 
          Password:
          <input type="text" name="name" onChange={props.passwordHandler} />
        </label>
        <input type="submit" value="Login" />
      </form>
    </section>
  );
}

export default Landing;