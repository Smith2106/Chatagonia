import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

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
        rooms: {
            general: {
                name: 'general',
                description: 'does stuff',
            },
            s3Morning: {
                name: 's3Morning',
                description: 'does other stuff',
            },
        },
    }

    componentDidMount() {
        base.fetch(`rooms/${this.state.currentRoom.name}`, {
            context: this,
            asArray: true,
            then(messages) {
                this.setState({messages});
            }
        });

        base.syncState('roomsList', {
            context: this,
            asArray: false,
            state: 'rooms',
        });
    }

    addMessage = (body) => {
        const messages = [...this.state.messages];
        const user = this.props.user;

        messages.push({
            id: `${user.uid}-${Date.now()}`,
            user,
            body,
        });

        this.setState({ messages }, () => {
            base.post(`rooms/${this.state.currentRoom.name}`, {
                data: this.state.messages,
            });
        });
    }

    setCurrentRoom = (currentRoom) => {
        this.setState({ currentRoom }, () => {
            console.log(this.state.currentRoom);
            base.fetch(`rooms/${this.state.currentRoom.name}`, {
                context: this,
                asArray: true,
                then(messages) {
                    this.setState({messages});
                },
            });
        });
    }

    addRoom = (room) => {
        this.setState({ 
            rooms: {
                ...this.state.rooms,
                [room.name]: room,
            } 
        });
    }

    render() {
        return (
            <Switch className="Main">
                <Route exact path="/" render={() => (
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
                    exact path="/createRoom" 
                    render={() => <RoomForm addRoom={this.addRoom}/>}
                />
            </Switch>
        );
    }
}

const styles = {
    display: 'flex',
    alignItems: 'stretch',
    height: '100vh',
};

export default Main;