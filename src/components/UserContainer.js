import React, { Component } from 'react';
import Header from './Header';

export default class UserContainer extends Component {
  render() {
    return (
      <div id="UserContainer">
        <Header />
        <h1>Hello from UserContainer for User {this.props.match.params.id}</h1>
      </div>
    );
  }
}