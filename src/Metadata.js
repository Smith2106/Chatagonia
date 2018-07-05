import React from 'react';

const Metadata = ({ message }) => {
    return (
        <div className="Metadata" style={styles.metadata}>
            <div className="user" style={styles.user}>{message.user.displayName}</div>
            <div className="time" style={styles.time}>1:16 PM</div>
        </div>
    );
};

const styles = {
    metadata: {
        display: 'flex',
        alignItems: 'baseline',
    },

    user: {
        fontWeight: 'bold',
        marginRight: '0.5rem',
    },

    time: {
        color: '#999',
        fontSize: '0.8rem',
    },
};

export default Metadata;