import React, { Component } from 'react';

import Message from './Message';

class MessageList extends Component {
    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: 'smooth' });
    }

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.messages.length < this.props.messages.length) {
            this.scrollToBottom();
        }
    }

    render() {
        return (
            <div className="MessageList" style={styles.messageList}>
                <div
                    className="roomAnnouncement"
                    style={styles.roomAnnouncement}
                >
                    <h3 styles={styles.h3}>
                        #{this.props.currentRoom.name}
                    </h3>
                    <p>This is the very beginning of the #{this.props.currentRoom.name} room.</p>
                </div>

                { 
                    this.props.messages.map(msg => (
                        <Message message={msg} key={msg.id} />
                    )) 
                }

                <div style={styles.messagesBottom}
                    ref={(el) => { this.messagesEnd = el; }}>
                </div>
            </div>
        );
    }
}

const styles = {
    messageList: {
        backgroundColor: 'white',
        flex: 1,
        paddingBottom: '1rem',
        overflowY: 'scroll',
    },

    roomAnnouncement: {
        padding: '2rem 1rem',
    },

    h3: {
        fontSize: '1.5rem',
    },

    messagesBottom: {
        float: 'left',
        clear: 'both',
    },
}

export default MessageList;