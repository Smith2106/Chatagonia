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
      if (user) {
        this.setState({user});
      }
      else {
        this.setState({user: null});
      }
    });
  }

  signOut = () => {
    auth.signOut();
  }

  render() {
    return (
      <div className="App">
        {this.state.user ? (
          <Main user={this.state.user} signOut={this.signOut} />
        ) : (
          <SignUp />
        )}
      </div>
    );
  }
}

export default App;
