import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

class SignIn extends Component {

    state = {
        email: '',
        password: '',
    };

    handleChange = (e, key) => {
        this.setState({
            [key]: e.target.value,
        });
    }

    render() {
        const isInvalid = this.state.email === '' || this.state.password === '';

        return (
            <form onSubmit={this.props.SignIn} className={`SignIn ${css(styles.form)}`} ref={(form) => this.loginForm = form} >
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
                    type="password"
                    name="password"
                    placeholder="Enter your password."
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
                >Sign In</button>
                <button
                    type="button"
                    className={css(styles.button)}
                    onClick={this.props.authGoogle}
                >
                    <i className={`fab fa-google ${css(styles.button)}`}></i>
                    Sign in with Google
                </button>
                <button
                    type="button"
                    className={css(styles.button)}
                    onClick={this.props.authGithub}
                >
                    <i className={`fab fa-github ${css(styles.button)}`}></i>
                    Sign in with Github
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
        background: 'lightsteelblue',
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

export default SignIn;