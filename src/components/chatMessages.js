import React, { Component } from 'react';
import { connect } from 'react-redux';

import { removeMessage } from '../redux/actions';

class ChatMessages extends Component {
    
    removeMessage(deletedMessage) {
        // this.props.messages.filter((message) => {
        //     return message.id !== deletedMessage.id;
        // })
        if(deletedMessage) this.props.dispatch(removeMessage(deletedMessage));
        console.log(this.props.dispatch);
    }

    render() {
        return (
            <div className="chat-messages">
                <ul className="chat-list">
                    {this.props.messages.map((message, i) => {
                        return <li key={Date.now()+i}>
                                    {message.user} Sent: {message.text}
                                   <button key={Date.now()+i} onClick={() => this.removeMessage(message)}>Remove Message</button>
                               </li>
                    })}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        messages: state.messages
    }
}

export default connect(mapStateToProps)(ChatMessages);