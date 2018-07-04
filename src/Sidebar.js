import React from 'react';

import UserInfo from './UserInfo';

const Sidebar = (props) => {
    return (
        <aside className="Sidebar" style={styles.sidebar}>
            <UserInfo style={styles.children} user={props.user} />
            <h1 style={styles.h1}>XTBC 18</h1>
            <nav className="RoomList" style={styles.children}>
                <h2 style={styles.roomlistH2}>Rooms</h2>
                <ul style={styles.roomlistUl}>
                    <li style={styles.roomlistLi}>
                        <a style={styles.roomlistA} href="#">general</a>
                    </li>
                    <li style={styles.roomlistLi}>
                        <a style={styles.roomlistA} href="#">random</a>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

const styles = {
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
        marginTop: '0',
        padding: '0 1rem',
    },

    roomlistH2: {
        fontSize: '1rem',
    },

    roomlistUl: {
        listStyle: 'none',
        marginLeft: '0',
        paddingLeft: '0',
    },

    roomlistLi: {
        marginBottom: '0.5rem',
    },

    roomlistA: {
        display: 'block',
        color: 'whitesmoke',
        textDecoration: 'none',
    },
};

export default Sidebar;