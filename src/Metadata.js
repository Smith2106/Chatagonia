import React from 'react';
import moment from 'moment';

const Metadata = ({ message }) => {
    return (
        <div className="Metadata" style={styles.metadata}>
            <div className="user" style={styles.user}>{message.user.displayName}</div>
            <div className="time" style={styles.time}>
                {   Date.now() - message.createdAt > (3600 * 24)
                    ? moment(message.createdAt).format('D MMM @ h:m A')
                    : moment(message.createdAt).fromNow()
                }
            </div>
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