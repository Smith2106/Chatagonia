import React, { Component } from 'react';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';

import './App.css';
import Main from './Main';
import Home from './Home';
import { auth } from './base';

class App extends Component {
  constructor(props) {
    super(props);
    console.log(localStorage.getItem('user'));
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user);

    this.state = {
      user: user || {},
    };
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.signIn(user);
      }
      else {
        this.setState({user: {} });
      }
    });
  }

  signOut = () => {
    auth.signOut();
    this.props.history.push('/');
    localStorage.setItem('user', JSON.stringify({}));
  }

  signIn = (user) => {
    console.log(user);
    this.setState({
      user: {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
      }
    }, () => {
      console.log(this.state.user);
      this.props.history.push(`/chat`);
      localStorage.setItem('user', JSON.stringify(this.state.user));
    });
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/chat/rooms/:roomName' render={() => (
            this.state.user.uid
              ? <Main user={this.state.user} signOut={this.signOut} />
              : <Redirect to='/' />
            )} />
            <Route path='/chat' render={() => (
              this.state.user.uid
                ? <Main user={this.state.user} signOut={this.signOut} />
                : <Redirect to='/' />
            )} />
            <Route path='/' component={Home} />  
         </Switch>
      </div>
    );
  }
}

export default withRouter(App);
