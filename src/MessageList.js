import React from 'react';

const MessageList = () => {
    const messages = [
        { id: 1, userName: 'esmith', body: 'Chatting up a storm, yo!' },
        { id: 2, userName: 'dpalazzo', body: 'This guy is so annoying. I hate my job.' },
    ];
    return (
        <div className="MessageList">
            { messages.map(msg => <p>{msg.userName}: {msg.body}</p>) }
        </div>
    );
}

export default MessageList;