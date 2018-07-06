import React, { Component } from 'react';

import './App.css';
import Main from './Main';
import SignIn from './SignIn';
import * as auth from './auth';

class App extends Component {
  constructor(props) {
    super(props);

    const user = null;

    this.state = {
      user,
    };
  }

  signIn = (user) => {
    console.log(user);
    this.setState({ user });
  }

  signOut = () => {
    this.setState({ user: null });
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
