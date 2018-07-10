import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import UserInfo from './UserInfo';
import RoomList from './RoomList';

const Sidebar = ({ user, signOut, setCurrentRoom, rooms }) => {
    return (
        <aside className={`Sidebar ${css(styles.sidebar)}`}>
            <UserInfo className={css(styles.children)} user={user} signOut={signOut} />
            <h1 className={css(styles.h1)}>XTBC 18</h1>
            <RoomList setCurrentRoom={setCurrentRoom} rooms={rooms} />
        </aside>
    );
};

const styles = StyleSheet.create({
    sidebar: {
        backgroundColor: '#333344',
        color: 'rgba(255, 255, 255, 0.8)',
        width: '12rem',
        padding: '1rem 0',
        display: 'flex',
        flexDirection: 'column',
    },

    children: {
        padding: '0 1rem',
    },

    h1: {
        color: 'white',
        fontSize: '1.2rem',
        marginTop: 0,
        padding: '0 1rem',
    },
});

export default Sidebar;