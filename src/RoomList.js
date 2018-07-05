import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

class RoomList extends Component {
    handleChange = (e) => {
        console.log(e.target.textContent);
        this.props.changeChat(e.target.textContent);
    }

    render() {
        return (
            <nav className={`RoomList ${css(styles.roomList)}`}>
                <h2 className={css(styles.h2)}>Rooms</h2>
                <ul className={css(styles.ul)}>
                    <li className={css(styles.li)}>
                        <a 
                            className={css(styles.button)} 
                            href="#"
                            onClick={this.handleChange}
                        >
                            general
                        </a>
                    </li>
                    <li className={css(styles.li)}>
                        <a 
                            className={css(styles.button)} 
                            href="#"
                            onClick={this.handleChange}
                        >
                            random
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
}

const styles = StyleSheet.create({
    roomList: {
        padding: '0 1rem',
    },

    h2: {
        fontSize: '1rem',
    },

    ul: {
        listStyle: 'none',
        marginLeft: 0,
        paddingLeft: 0,
    },

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

export default RoomList;