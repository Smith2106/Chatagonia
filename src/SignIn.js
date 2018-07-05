import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

class SignIn extends Component {

    state = {
        email: '',
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn({
            uid: `${this.state.email}-asdfljasdfkljsaf234`,
            displayName: this.state.email.slice(0, this.state.email.indexOf('@')),
            email: this.state.email,
        });
        this.setState({
            email: '',
        });
    }

    handleChange = (e, key) => {
        this.setState({
            [key]: e.target.value,
        });
    }

    render() {
        return (
            <div className={`SignIn ${css(styles.container)}`}>
                <h1 className={css(styles.title)}>Chatagonia</h1>
                <form onSubmit={this.handleSubmit} className={css(styles.form)}>
                    <input 
                        autoFocus
                        required    
                        type="email"
                        name="email"
                        placeholder="Enter your email."
                        value={this.state.email}
                        onChange={(e) => this.handleChange(e, 'email')}
                        className={css(styles.input)}
                    />
                    <button type="submit" className={css(styles.button)}>Sign In</button>
                </form>
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
        boxShadow: '2px 2px 2px lightgrey',
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
    },

    title: {
        color: 'darkolivegreen',
        fontSize: '64px',
    }
});

export default SignIn;