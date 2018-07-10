import React, { Component } from 'react';

class RoomForm extends Component {
    state = {
        name: '',
        description: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
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
                onSubmit={this.handleSubmit}
            >
                <label htmlFor="name">
                    Room Name:
                    <input 
                        type="text"
                        name="name"
                        placeholder="general"
                        onChange={(e) => this.handleChange(e, 'name')}
                    />
                </label>
                <label htmlFor="description">
                    Description:
                    <input 
                        type="text"
                        name="description"
                        placeholder="A place to chat about general things."
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

export default RoomForm;