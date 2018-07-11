import React from 'react';

const ChatHeader = ({ currentRoom, removeRoom }) => {
    return (
        <header className="ChatHeader" style={styles.chatHeader}>
            <div className="roomInfo">
                <h2 style={styles.roomInfoH2}>#{currentRoom.name}</h2>
                <p style={styles.roomInfoP}>{currentRoom.description}</p>
            </div>
            <button
                style={styles.button}
                onClick={() => removeRoom(currentRoom.name)}
            >
                <i className="far fa-trash-alt" title="delete room"></i>
            </button>
        </header>
    );
};

const styles = {
    chatHeader: {
        backgroundColor: '#f3f3f3',
        borderBottom: '1px solid #ccc',
        padding: '0.5rem 1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    roomInfoH2: {
        fontSize: '1.1rem',
        margin: 0,
    },

    roomInfoP: {
        color: '#999',
        margin: 0,
        fontSize: '0.8rem',
    },

    button: {
        border: 0,
        outline: 0,
        backgroundColor: 'transparent',
        padding: 0,
        cursor: 'pointer',
        fontSize: '1rem',
        color: 'rgba(0,0,0, 0.4)',
    },
};


export default ChatHeader;