import React from 'react';

const Sidebar = (props) => {
    return (
        <aside className="Sidebar" style={styles.sidebar}>
            <div className="UserInfo" style={{...styles.children, ...styles.userInfo}}>
                <div
                    className="Avatar"
                    styles={styles.userAvatar}
                ></div>
                <div className="user" style={styles.user}>{props.user.displayName}</div>
                <a href="#" style={styles.userInfoA}>
                    <i className="fas fa-sign-out-alt"></i>
                </a>
            </div>
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

    userInfo: {
        marginBottom: '1rem',
        display: 'flex',
        alignItems: 'center',
    },

    userAvatar: {
        marginRight: '0.5rem',
    },

    user: {
        flex: '1',
    },

    userInfoA: {
        border: '0',
        padding: '0',
        backgroundColor: 'transparent',
        color: 'rgba(255, 255, 255, 0.6)',
        fontSize: '1.2rem',
        transition: 'color 0.25s ease-out',
    }
};

export default Sidebar;