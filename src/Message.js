import React from 'react';

const Message = (props) => {
    return (
        <div class="Message" style={styles.message}>
          <div
            class="Avatar"
            style={styles.avatar}
          ></div>
          <div class="details" style={styles.details}>
            <div class="Metadata" style={styles.metadata}>
              <div class="user" style={styles.user}>{props.message.user.displayName}</div>
              <div class="time" style={styles.time}>1:16 PM</div>
            </div>
            <div class="body">
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

    avatar: {
        background: 'url(https://api.adorable.io/avatars/32/davey@getfretless.com)',
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