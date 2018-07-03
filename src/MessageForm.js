import React, { Component } from 'react';

class MessageForm extends Component {
    state = {
        body: '',
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addMessage(this.state.body);
        this.setState({ body: '' });
    }

    handleChage = (e) => {
        this.setState({
            body: e.target.value,
        });
    }

    render() {
        return (
            <form 
                className="MessageForm"
                onSubmit={this.handleSubmit}
            >
                <input
                    autoFocus
                    required
                    type="text"
                    name="body"
                    placeholder="Type a message..."
                    value={this.state.body}
                    onChange={this.handleChage}
                />
                <button type="submit">
                    Send
                </button>
            </form>
        );
    }
}

export default MessageForm;