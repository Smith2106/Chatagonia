import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

import RoomListHeader from './RoomListHeader'
import Room from './Room';

class RoomList extends Component {
    handleChange = (e) => {
        console.log(e.target.textContent);
        this.props.setCurrentRoom(this.props.rooms[e.target.textContent]);
    }

    render() {
        return (
            <nav className={`RoomList ${css(styles.roomList)}`}>
                <RoomListHeader />
                <ul className={css(styles.ul)}>
                    {Object.keys(this.props.rooms).map(roomName => (
                        <Room handleChange={this.handleChange} roomName={roomName} key={roomName} />
                    ))}
                </ul>
            </nav>
        );
    }
}

const styles = StyleSheet.create({
    roomList: {
        padding: '0 1rem',
    },

    ul: {
        listStyle: 'none',
        marginLeft: 0,
        paddingLeft: 0,
    },

    li: {
        marginBottom: '0.5rem',
    },
});

export default RoomList;