import React, { Component } from 'react';

import Sidebar from './Sidebar';
import Chat from './Chat';
import { base } from './base';

class Main extends Component {
    state = {
        currentRoom: {
            roomName: 'general',
            description: 'does stuff'
        },
        messages: [],
        rooms: {
            general: {
                roomName: 'general',
                description: 'does stuff',
            },
            s3Morning: {
                roomName: 's3Morning',
                description: 'does other stuff',
            },
        },
    }

    componentDidMount() {
        base.fetch(`rooms/${this.state.currentRoom.roomName}`, {
            context: this,
            asArray: true,
            then(messages) {
                this.setState({messages});
            }
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
            base.post(`rooms/${this.state.currentRoom.roomName}`, {
                data: this.state.messages,
            });
        });
    }

    setCurrentRoom = (currentRoom) => {
        this.setState({ currentRoom }, () => {
            base.fetch(`rooms/${this.state.currentRoom.roomName}`, {
                context: this,
                asArray: true,
                then(messages) {
                    this.setState({messages});
                },
            });
        });
    }

    render() {
        return (
            <div className="Main" style={styles}>
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
        );
    }
}

const styles = {
    display: 'flex',
    alignItems: 'stretch',
    height: '100vh',
};

export default Main;