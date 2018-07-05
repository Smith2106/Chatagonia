import React from 'react';

const Avatar = ({ user, style }) => {
    const imageUrl = `https://api.adorable.io/avatars/40/${user.email}.png`;

    return (
        <div
            className="Avatar"
            style={{
                ...style,
                ...styles,
                backgroundImage: `url(${imageUrl})`,
            }}
        ></div>
    );
};

const styles = {
    height: '40px',
    width: '40px',
    fontSize: '1rem',
    borderRadius: '20px',
};

export default Avatar;