import React, { Component } from 'react';

import ChatHeader from './ChatHeader';
import MessageList from './MessageList';
import MessageForm from './MessageForm';

class Chat extends Component {
    render() {
        return (
            <div className="Chat" style={styles}>
                <ChatHeader chatRoom={this.props.chatRoom} />
                <MessageList messages={this.props.messages} chatRoom={this.props.chatRoom} />
                <MessageForm addMessage={this.props.addMessage} />
            </div>
        );
    }
}

const styles = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
}

export default Chat;