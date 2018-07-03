import React, { Component } from 'react';

import ChatHeader from './ChatHeader';
import MessageList from './MessageList';
import MessageForm from './MessageForm';

class Chat extends Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: [
                { id: 1, userName: 'esmith', body: 'blamo!' },
                { id: 2, userName: 'bro', body: 'wow' },
            ],
        };
    }

    render() {
        return (
            <div className="Chat">
                <ChatHeader />
                <MessageList messages={this.state.messages}/>
                <MessageForm />
            </div>
        );
    }
}

export default Chat;