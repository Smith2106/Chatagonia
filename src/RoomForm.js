import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

class RoomForm extends Component {
    state = {
        name: '',
        description: ''
    }

    handleSubmit = (e) => {
        console.log('annything');
        const {name, description} = this.state;
        console.log('hello');
        e.preventDefault();
        this.props.addRoom({
            name,
            description,
        });

        this.props.history.push('/');
    }

    handleChange = (e, key) => {
        this.setState({
            [key]: e.target.value,
        });
    }

    render() {
        return (
            <form 
                className="RoomForm"
                onSubmit={(e) => this.handleSubmit(e)}
            >
                <label htmlFor="name">
                    Room Name:
                    <input
                        autoFocus
                        required 
                        type="text"
                        name="name"
                        placeholder="general"
                        value={this.state.name}
                        onChange={(e) => this.handleChange(e, 'name')}
                    />
                </label>
                <label htmlFor="description">
                    Description:
                    <input 
                        required
                        type="text"
                        name="description"
                        placeholder="A place to chat about general things."
                        value={this.state.description}
                        onChange={(e) => this.handleChange(e, 'description')}
                    />
                </label>
                <button type="submit">
                    Create Room
                </button>
            </form>
        );
    }
}

export default withRouter(RoomForm);