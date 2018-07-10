import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Switch, Route } from 'react-router-dom';

import { auth, googleProvider, githubProvider } from './base';
import SignUp from './SignUp';
import SignIn from './SignIn';
import UserButtons from './UserButtons';

class Home extends Component {

    state = {
        email: '',
        password: '',
        displayName: '',
    };

    signUpWithEmailPassword = (e) => {
        e.preventDefault();
        const { email, password, displayName } = this.state;

        auth.createUserWithEmailAndPassword(email, password)
            .then(authUser => {
                console.log(authUser.displayName);
                authUser.user.updateProfile({displayName})
                    .then(() => {
                        this.setState({ email: '', password: '', displayName: ''});
                    });
            });
    }

    signInWithEmailPassword = (e) => {
        e.preventDefault();
        const { email, password } = this.state;

        auth.signInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({ email: '', password: '' });
            });
    }

    authGoogle = () => {
        auth.signInWithPopup(googleProvider)
    }

    authGithub = () => {
        auth.signInWithPopup(githubProvider);
    }

    handleChange = (e, key) => {
        this.setState({
            [key]: e.target.value,
        });
    }

    render() {
        const isInvalid = this.state.email === '' || this.state.password === '';

        return (
            <div className={`Home ${css(styles.container)}`}>
                <h1 className={css(styles.title)}>Chatagonia</h1>
                <Switch>
                    <Route exact path="/" component={UserButtons} />
                    <Route exact path="/signUp" render={() => (
                        <SignUp 
                            handleChange={this.handleChange} 
                            signUp={this.signUpWithEmailPassword}
                            authGoogle={this.authGoogle}
                            authGithub={this.authGithub} 
                        />
                    )} />
                    <Route exact path="/signIn" render={() => (
                        <SignIn 
                            handleChange={this.handleChange} 
                            signIn={this.signInWithEmailPassword}
                            authGoogle={this.authGoogle}
                            authGithub={this.authGithub}
                        />
                    )} />
                </Switch>
            </div>
        );
    }
}

const styles = StyleSheet.create({
    form: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        background: 'darksalmon',
        justifyContent: 'center',
        padding: '2rem 3rem',
        width: '22rem',
        borderRadius: '5px',
    },

    input: {
        margin: '0.3rem',
        padding: '0.5rem',
        boxShadow: '2px 2px 2px rgba(0,0,0,0.3)',
        borderRadius: '2px',
        border: '1px solid rgba(0,0,0,0.3)',
        fontSize: '1rem',
        width: '100%',
        opacity: 0.6,

        ':focus': {
            border: '1px solid rgba(73, 90, 41, 0.5)',
            transform: 'scale(1.01)',
            transition: '0.4s',
        },
    },

    button: {
        margin: '0.5rem',
        padding: '0.8rem',
        border: 'none',
        background: 'darkolivegreen',
        color: 'white',
        fontSize: '1rem',

        ':hover': {
            transform: 'scale(1.05)',
            background: 'rgb(73, 90, 41)',
            border: '0.05px solid lightsteelblue',
            transition: '0.2s',
        },
    },

    container: {
        display: 'flex',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundImage: "url('https://images.unsplash.com/photo-1470399542183-e6245d78c479?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2f37382c0d0203b8be43fea0a8380965&auto=format&fit=crop&w=967&q=80')",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },

    title: {
        color: 'darkolivegreen',
        fontSize: '64px',
    }
});

export default Home;