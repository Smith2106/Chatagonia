import React from 'react';

import Message from './Message';

const MessageList = (props) => {
    return (
        <div className="MessageList" style={styles.messageList}>
            { props.messages.map(msg => (
                <Message message={msg} key={msg.id} />
            )) }
        </div>
    );
};

const styles = {
    messageList: {
        backgroundColor: 'white',
        flex: '1',
        paddingBottom: '1rem',
        overflowY: 'scroll',
    },

    announcement: {
        padding: '2rem 1rem',
    },

    announcementH3: {
        fontSize: '1.5rem',
    },
}

export default MessageList;