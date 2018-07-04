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
            <form className="SignIn" onSubmit={this.handleSubmit}>
                <input 
                    autoFocus
                    required    
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={(e) => this.handleChange(e, 'email')}
                />
                <input 
                    required    
                    type="text"
                    name="displayName"
                    value={this.state.displayName}
                    onChange={(e) => this.handleChange(e, 'displayName')}
                />
                <input
                    required    
                    type="text"
                    name="uid"
                    value={this.state.uid}
                    onChange={(e) => this.handleChange(e, 'uid')}
                />
                <button type="submit">Sign In</button>
            </form>
        );
    }
}

export default SignIn;