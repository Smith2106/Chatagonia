import React, { Component } from 'react';

import './App.css';
import Main from './Main';
import SignIn from './SignIn';

class App extends Component {
  constructor(props) {
    super(props);

    const user = JSON.parse(localStorage.getItem('user')) || {};

    this.state = {
      user,
    };
  }

  signIn = (user) => {
    this.setState({ user });
    localStorage.setItem('user', JSON.stringify(user));
  }

  signOut = () => {
    this.setState({ user: null });
    localStorage.removeItem('user')
  }

  render() {
    return (
      <div className="App">
        {this.state.user ? (
          <Main user={this.state.user} signOut={this.signOut} />
        ) : (
          <SignIn signIn={this.signIn} />
        )}
      </div>
    );
  }
}

export default App;
