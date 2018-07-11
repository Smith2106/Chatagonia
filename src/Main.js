import React, { Component } from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';

import Sidebar from './Sidebar';
import Chat from './Chat';
import RoomForm from './RoomForm';
import { base } from './base';

class Main extends Component {
    state = {
        currentRoom: {
            name: 'general',
            description: 'does stuff'
        },
        messages: [],
        rooms: {},
    }

    componentDidMount() {
        base.fetch(`messages/${this.state.currentRoom.name}`, {
            context: this,
            asArray: true,
            then(messages) {
                this.setState({messages});
            }
        });

        this.roomsRef = base.syncState('rooms', {
            context: this,
            asArray: false,
            state: 'rooms',
            defaultValue: {
                general: {
                    name: 'general',
                    description: 'Chat about stuff',
                },
            },
            then: this.setRoomFromRoute,
        });
    }

    componentDidUpdate(prevProps) {
        console.log(this.props.match);
        const { roomName } = this.props.match.params;
        if (prevProps.match.params.roomName !== roomName) {
            this.setRoomFromRoute();
        }
    }

    componentWillUnmount() {
        base.removeBinding(this.roomsRef);
    }

    addMessage = (body) => {
        const messages = [...this.state.messages];
        const user = this.props.user;

        messages.push({
            id: `${user.uid}-${Date.now()}`,
            user,
            body,
            createdAt: Date.now(),
        });

        this.setState({ messages }, () => {
            base.post(`messages/${this.state.currentRoom.name}`, {
                data: this.state.messages,
            });
        });
    }

    setCurrentRoom = (roomName) => {
        const currentRoom = this.state.rooms[roomName];

        if (currentRoom) {
            this.setState({ currentRoom }, () => {
                console.log(this.state.currentRoom);
                base.fetch(`messages/${this.state.currentRoom.name}`, {
                    context: this,
                    asArray: true,
                    then(messages) {
                        this.setState({messages});
                    },
                });
            });
        }
        else {
            this.loadValidRoom();
        }
    }

    setRoomFromRoute = () => {
        const { roomName } = this.props.match.params;
        if (roomName) {
            this.setCurrentRoom(roomName);
        }
    }

    addRoom = (room) => {
        this.setState({ 
            rooms: {
                ...this.state.rooms,
                [room.name]: room,
            } 
        });
    }

    removeRoom = (room) => {

    }

    loadValidRoom() {
        const roomNames = Object.keys(this.state.rooms);
        if (roomNames.length > 0) {
            const roomName = roomNames[0];
            this.props.history.push(`/chat/rooms/${roomName}`);
        }
    }

    render() {
        return (
            <Switch className="Main">
                <Route path="/chat/rooms/:roomName" render={() => (
                    <div style={styles}>
                        <Sidebar 
                            user={this.props.user} 
                            signOut={this.props.signOut} 
                            setCurrentRoom={this.setCurrentRoom}
                            rooms={this.state.rooms}
                        />
                        <Chat 
                            user={this.props.user}
                            addMessage={this.addMessage}
                            messages={this.state.messages}
                            currentRoom={this.state.currentRoom}
                        />
                    </div>
                )}/>
                <Route 
                    exact path="/chat/createRoom" 
                    render={() => <RoomForm addRoom={this.addRoom}/>}
                />
                <Route render={() => (
                    <Redirect to="/chat/rooms/general" />
                )} />
            </Switch>
        );
    }
}

const styles = {
    display: 'flex',
    alignItems: 'stretch',
    height: '100vh',
};

export default withRouter(Main);