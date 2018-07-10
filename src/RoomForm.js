import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { withRouter } from 'react-router-dom';

class RoomForm extends Component {
    state = {
        name: '',
        description: ''
    }

    handleSubmit = (e) => {
        console.log('annything');
        const {name, description} = this.state;
        console.log('hello');
        e.preventDefault();
        this.props.addRoom({
            name,
            description,
        });

        this.props.history.push('/');
    }

    handleChange = (e, key) => {
        this.setState({
            [key]: e.target.value,
        });
    }

    render() {
        return (
            <div className={`RoomForm ${css(styles.container)}`}>
                <h1 className={css(styles.h1)}>Create a Room</h1>
                <form
                    onSubmit={(e) => this.handleSubmit(e)}
                    className={css(styles.form)}
                >
                    <label htmlFor="name">
                        Room Name:
                        <input
                            autoFocus
                            required 
                            type="text"
                            name="name"
                            placeholder="general"
                            value={this.state.name}
                            onChange={(e) => this.handleChange(e, 'name')}
                            className={css(styles.input)}
                        />
                    </label>
                    <label htmlFor="description">
                        Description:
                        <input 
                            required
                            type="text"
                            name="description"
                            placeholder="A place to chat about general things."
                            value={this.state.description}
                            onChange={(e) => this.handleChange(e, 'description')}
                            className={css(styles.input)}
                        />
                    </label>
                    <button type="submit" className={css(styles.button)}>
                        Create Room
                    </button>
                </form>
            </div>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundImage: "url('https://images.unsplash.com/photo-1470399542183-e6245d78c479?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2f37382c0d0203b8be43fea0a8380965&auto=format&fit=crop&w=967&q=80')",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },

    form: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        background: 'darksalmon',
        justifyContent: 'center',
        padding: '2rem 3rem',
        width: '22rem',
        borderRadius: '5px',
    },

    input: {
        margin: '0.3rem',
        padding: '0.5rem',
        boxShadow: '2px 2px 2px rgba(0,0,0,0.3)',
        borderRadius: '2px',
        border: '1px solid rgba(0,0,0,0.3)',
        fontSize: '1rem',
        width: '100%',
        opacity: 0.6,

        ':focus': {
            border: '1px solid rgba(73, 90, 41, 0.5)',
            transform: 'scale(1.01)',
            transition: '0.4s',
        },
    },

    button: {
        margin: '0.5rem',
        padding: '0.8rem',
        border: 'none',
        background: 'darkolivegreen',
        color: 'rgba(255,255,255,0.75)',
        fontSize: '1rem',

        ':hover': {
            transform: 'scale(1.05)',
            background: 'rgb(73, 90, 41)',
            border: '0.05px solid rgba(0, 0, 0, 0.5)',
            transition: '0.2s',
        },
    },

    h1: {
        color: 'darkolivegreen',
        fontSize: '64px',
    }
});

export default withRouter(RoomForm);