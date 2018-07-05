import React from 'react';

import Avatar from './Avatar';
import SignOutButton from './SignOutButton';

const UserInfo = ({ user, style }) => {
    return (
        <div className="UserInfo" style={{...style, ...styles.info}}>
            <Avatar style={styles.avatar} user={user} />
            <div className="user" style={styles.user}>{user.displayName}</div>
            <SignOutButton />
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
};

export default UserInfo;