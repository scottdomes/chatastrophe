import React, { Component } from 'react';

class LoginContainer extends Component {
  render() {
    return (
      <div id="LoginContainer">
        <div id="Header">
          <img src="/assets/icon.png" alt="logo" />
          <h1>Chatastrophe</h1>
        </div>
        <form>
          <p>Sign in or sign up by entering your email and password.</p>
          <input type="text" placeholder="Your email" />
          <input type="password" placeholder="Your password" />
          <button className="red light" type="submit">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginContainer;
