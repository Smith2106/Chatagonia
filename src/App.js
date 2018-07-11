import React, { Component } from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Main from './Main';
import Home from './Home';
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
        this.signIn(user);
      }
      else {
        this.setState({user: null});
      }
    });
  }

  signOut = () => {
    auth.signOut();
  }

  signIn = (user) => {
    this.setState({
      user: {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
      }
    }, () => {
      this.props.history.push('/');
    });
  }

  render() {
    return (
      <div className="App">
        <Switch>
            <Route path='/' render={() => (
            this.state.user
              ? <Main user={this.state.user} signOut={this.signOut} />
              : <Home />
            )
          } />
         </Switch>
      </div>
    );
  }
}

export default withRouter(App);
