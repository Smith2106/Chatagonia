import React, { Component } from 'react';

import './App.css';
import Main from './Main';
import SignIn from './SignIn';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
    };
  }

  signIn = (user) => {
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
