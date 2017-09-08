import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import LoginContainer from './LoginContainer';
import ChatContainer from './ChatContainer';
import UserContainer from './UserContainer';
import './app.css';

class App extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      } else {
        this.props.history.push('/login');
      }
    });
  }

  handleSubmitMessage = msg => {
    // Send to database
    console.log(msg);
  };

  render() {
    return (
      <div id="container">
        <Route path="/login" component={LoginContainer} />
        <Route
          exact
          path="/"
          render={() => <ChatContainer onSubmit={this.handleSubmitMessage} />}
        />
        <Route path="/users/:id" component={UserContainer} />
      </div>
    );
  }
}

export default withRouter(App);
