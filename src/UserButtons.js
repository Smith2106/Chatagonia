import React from 'react';
import { Link } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';

const UserButtons = () => {
    return (
        <div className="UserButtons">
            <Link to="/signIn" className={css(styles.button)}>
                Sign In
            </Link>
            <Link to="/signUp" className={css(styles.button)}>
                Sign Up
            </Link>
        </div>
    );
};

const styles = StyleSheet.create({
    button: {
        margin: '0.5rem',
        padding: '0.8rem',
        border: 'none',
        background: 'darkolivegreen',
        color: 'white',
        fontSize: '1rem',
        textDecoration: 'none',

        ':hover': {
            background: 'rgb(73, 90, 41)',
            border: '0.05px solid rgba(0, 0, 0, 0.5)',
            transition: '0.2s',
        },
    },
});

export default UserButtons;
