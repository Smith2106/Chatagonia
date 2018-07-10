import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const RoomListHeader = () => {
    return (
        <div className={css(styles.container)}>
            <h2 className={css(styles.h2)}>Rooms</h2>
            <button className={css(styles.button)}>
                <i className="fas fa-plus-circle"></i>
            </button>
        </div>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
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