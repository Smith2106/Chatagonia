import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { NavLink } from 'react-router-dom';

const Room = ({ roomName }) => {
    return (
        <li className={css(styles.li)}>
            <NavLink 
                className={css(styles.button)} 
                to={`/chat/rooms/${roomName}`}
            >
                {roomName}
            </NavLink>
        </li>
    );
}

const styles = StyleSheet.create({
    li: {
        marginBottom: '0.5rem',
    },

    button: {
        display: 'block',
        color: 'whitesmoke',
        textDecoration: 'none',
        background: 'rgba(0,0,0,0)',
        border: 'none',

        ':before': {
            content: "'# '",
        },

        ':hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
        },
    },
});

export default Room;