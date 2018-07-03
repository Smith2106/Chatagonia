import React, { Component } from 'react';

import ChatHeader from './ChatHeader';
import MessageList from './MessageList';
import MessageForm from './MessageForm';

class Chat extends Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: [
                { 
                    id: 1, 
                    user: {
                        uid: 123,
                        displayName: 'esmith',
                        email: 'elijahs2106@gmail.com',
                    },
                    body: 'blamo!' 
                },
                { 
                    id: 2,
                    user: {
                        uid: 12444,
                        displayName: 'bro',
                        email: 'how@gmail.com',
                    },
                    body: 'wow',
                }
            ],
        };
    }

    addMessage = (body) => {
        const messages = [...this.state.messages];
        const user = this.props.user;

        messages.push({
            id: `${user.uid}-${Date.now()}`,
            user,
            body,
        });

        this.setState({ messages });
    }

    render() {
        return (
            <div className="Chat">
                <ChatHeader />
                <MessageList messages={this.state.messages}/>
                <MessageForm addMessage={this.addMessage} />
            </div>
        );
    }
}

export default Chat;