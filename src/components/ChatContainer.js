import React, { Component } from 'react';
import Header from './Header';

export default class ChatContainer extends Component {
  render() {
    return (
      <div id="ChatContainer">
        <Header />
        <h1>Hello from ChatContainer</h1>
      </div>
    );
  }
}