import React, { Component } from 'react';

import './App.css';
import Main from './Main';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { auth } from './base';

class App extends Component {
  constructor(props) {
    super(props);

    const user = null;

    this.state = {
      user,
    };
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({user});
    });
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
          <SignUp signIn={this.signIn} />
        )}
      </div>
    );
  }
}

export default App;
