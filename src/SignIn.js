import React, { Component } from 'react';

class SignIn extends Component {

    state = {
        uid: '',
        displayName: '',
        email: '',
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn({...this.state});
        this.setState({
            uid: '',
            displayName: '',
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
            <div className="SignIn" style={styles.container}>
                <h1 style={styles.title}>Chatagonia</h1>
                <form onSubmit={this.handleSubmit} style={styles.form}>
                    <input 
                        autoFocus
                        required    
                        type="email"
                        name="email"
                        placeholder="Enter an email."
                        value={this.state.email}
                        onChange={(e) => this.handleChange(e, 'email')}
                        style={styles.input}
                    />
                    <input 
                        required    
                        type="text"
                        name="displayName"
                        value={this.state.displayName}
                        placeholder="Enter a display name."
                        onChange={(e) => this.handleChange(e, 'displayName')}
                        style={styles.input}
                    />
                    <input
                        required    
                        type="text"
                        name="uid"
                        placeholder="Enter a user ID."
                        value={this.state.uid}
                        onChange={(e) => this.handleChange(e, 'uid')}
                        style={styles.input}
                    />
                    <button type="submit" style={styles.button}>Sign In</button>
                </form>
            </div>
        );
    }
}

const styles = {
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
        opacity: '0.6',
    },

    button: {
        margin: '0.5rem',
        padding: '0.8rem',
        border: 'none',
        background: 'darkolivegreen',
        color: 'white',
        fontSize: '1rem',
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
}

export default SignIn;