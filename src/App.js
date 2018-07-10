import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

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
        this.setState({
          user: {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
          }
        });
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
        <BrowserRouter>
          <Route path='/' render={() => (
          this.state.user
            ? <Main user={this.state.user} signOut={this.signOut} />
            : <SignUp />
          )
         } />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
