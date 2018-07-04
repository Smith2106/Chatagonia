import React, { Component } from 'react';

import './App.css';
import Main from './Main';
import SignIn from './SignIn';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        uid: '5DKfh32948',
        displayName: 'Eli',
        email: 'smit2872@purdue.edu',
      },
    };
  }

  signIn = (user) => {
    this.setState({
      user
    });
  }

  render() {
    return (
      <div className="App">
        <SignIn signIn={this.signIn} />
        <Main user={this.state.user}/>
      </div>
    );
  }
}

export default App;
