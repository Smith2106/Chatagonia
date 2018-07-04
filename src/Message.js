import React from 'react';

import Avatar from './Avatar';

const Message = (props) => {
    return (
        <div className="Message" style={styles.message}>
          <Avatar />
          <div className="details" style={styles.details}>
            <div className="Metadata" style={styles.metadata}>
              <div className="user" style={styles.user}>{props.message.user.displayName}</div>
              <div className="time" style={styles.time}>1:16 PM</div>
            </div>
            <div className="body">
              {props.message.body}
            </div>
          </div>
        </div>
    );
};

const styles = {
    message: {
        display: 'flex',
        marginTop: '1rem',
        padding: '0 1rem',
    },

    details: {
        flex: '1',
        paddingLeft: '0.5rem',
    },

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
}

export default Message;