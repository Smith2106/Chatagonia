import React, { Component } from 'react';

import Sidebar from './Sidebar';
import Chat from './Chat';
import { base } from './base';

class Main extends Component {
    state = {
        chatRoom: 'general',
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
        base.fetch(`chatRooms/${this.state.chatRoom}`, {
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
            console.log(this.state.chatRoom);
            base.post(`chatRooms/${this.state.chatRoom}`, {
                data: this.state.messages,
            });
        });
    }

    changeChat = (chatRoom) => {
        this.setState({ chatRoom }, () => {
            base.fetch(`chatRooms/${this.state.chatRoom}`, {
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
                    changeChat={this.changeChat}
                    rooms={this.state.rooms}
                />
                <Chat 
                    user={this.props.user}
                    addMessage={this.addMessage}
                    messages={this.state.messages}
                    chatRoom={this.state.chatRoom}
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