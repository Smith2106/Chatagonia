import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Link } from 'react-router-dom';

const RoomListHeader = () => {
    return (
        <div className={css(styles.container)}>
            <h2 className={css(styles.h2)}>Rooms</h2>
            <Link to="/chat/createRoom" className={css(styles.button)}>
                <i className="fas fa-plus-circle" title="Add room"></i>
            </Link>
        </div>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    h2: {
        fontSize: '1rem',
    },

    button: {
        border: 0,
        padding: '0.2rem',
        backgroundColor: 'transparent',
        color: 'rgba(255, 255, 255, 0.6)',
        fontSize: '1.1rem',
        transition: 'color 0.25s ease-out',
        cursor: 'pointer',
        width: '1rem',

        ':hover': {
            color: 'white',
        },
    },
});

export default RoomListHeader;