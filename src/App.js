import React, { Component } from 'react';

import './App.css';
import Main from './Main';

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

  render() {
    return (
      <div className="App">
        <Main user={this.state.user}/>
      </div>
    );
  }
}

export default App;
