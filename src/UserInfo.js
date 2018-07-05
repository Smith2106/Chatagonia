import React from 'react';

import Avatar from './Avatar';

const UserInfo = props => {
    return (
        <div className="UserInfo" style={{...props.style, ...styles.info}}>
            <Avatar style={styles.avatar} user={props.user} />
            <div className="user" style={styles.user}>{props.user.displayName}</div>
            <a href="#" style={styles.link}>
                <i className="fas fa-sign-out-alt"></i>
            </a>
        </div>
    );
};

const styles = {
    info: {
        marginBottom: '1rem',
        display: 'flex',
        alignItems: 'center',
    },

    avatar: {
        marginRight: '0.5rem',
    },

    user: {
        flex: '1',
    },

    link: {
        border: '0',
        padding: '0',
        backgroundColor: 'transparent',
        color: 'rgba(255, 255, 255, 0.6)',
        fontSize: '1.2rem',
        transition: 'color 0.25s ease-out',
    }
};

export default UserInfo;