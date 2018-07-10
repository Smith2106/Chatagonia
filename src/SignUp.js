import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

class SignUp extends Component {

    state = {
        email: '',
        password: '',
        displayName: '',
    };

    handleChange = (e, key) => {
        this.setState({
            [key]: e.target.value,
        });
    }

    render() {
        const isInvalid = this.state.email === '' || this.state.password === '';

        return (
            <form onSubmit={this.props.signUp} className={`SignUp ${css(styles.form)}`} ref={(form) => this.loginForm = form} >
                <input 
                    autoFocus
                    required    
                    type="email"
                    name="email"
                    placeholder="Enter your email."
                    value={this.state.email}
                    onChange={(e) => {
                            this.handleChange(e, 'email');
                            this.props.handleChange(e, 'email');
                        }
                    }
                    className={css(styles.input)}
                    ref={(input) => this.emailInput = input}
                />
                <input
                    required    
                    type="text"
                    name="displayName"
                    placeholder="Enter a display name."
                    value={this.state.displayName}
                    onChange={(e) => {
                            this.handleChange(e, 'displayName');
                            this.props.handleChange(e, 'displayName');
                        }
                    }
                    className={css(styles.input)}
                    ref={(input) => this.displayNameInput = input}
                />
                <input 
                    required
                    type="password"
                    name="password"
                    placeholder="Enter a password."
                    value={this.state.password}
                    onChange={(e) => {
                            this.handleChange(e, 'password');
                            this.props.handleChange(e, 'password');
                        }
                    }
                    className={css(styles.input)}
                    ref={(input) => this.passwordInput = input}
                />
                <button 
                    type="submit" 
                    className={css(styles.button)}
                    disabled={isInvalid}
                >Sign Up</button>
                <button
                    type="button"
                    className={css(styles.google)}
                    onClick={this.props.authGoogle}
                >
                    <i className="fab fa-google"></i>
                    Sign up with Google
                </button>
                <button
                    type="button"
                    className={css(styles.github)}
                    onClick={this.props.authGithub}
                >
                    <i className='fab fa-github'></i>
                    Sign up with Github
                </button>
            </form>
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
        color: 'rgba(255,255,255,0.75)',
        fontSize: '1rem',

        ':hover': {
            transform: 'scale(1.05)',
            background: 'rgb(73, 90, 41)',
            border: '0.05px solid rgba(0, 0, 0, 0.5)',
            transition: '0.2s',
        },
    },

    google: {
        margin: '0.5rem',
        padding: '0.8rem',
        border: 'none',
        background: 'rgb(230, 0, 0)',
        color: 'rgba(255,255,255,0.75)',
        fontSize: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '12rem',

        ':hover': {
            transform: 'scale(1.05)',
            background: 'rgb(215, 0, 0)',
            border: '0.05px solid rgba(0, 0, 0, 0.5)',
            transition: '0.2s',
        },
    },

    github: {
        margin: '0.5rem',
        padding: '0.8rem',
        border: 'none',
        background: '#24292e',
        color: 'rgba(255,255,255,0.75)',
        fontSize: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '12rem',

        ':hover': {
            transform: 'scale(1.05)',
            background: '#14191e',
            border: '0.05px solid lightsteelblue',
            transition: '0.2s',
        },
    }
});

export default SignUp;