import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addMessage } from '../redux/actions';

class ChatInput extends Component {

    componentDidMount() {
        this.refs.chatInput.focus();
    }

    chat() {
        const text = this.refs.chatInput.value;
        if (text) this.props.dispatch(addMessage(text));
        this.refs.chatInput.value = '';
        this.refs.chatInput.focus();

    }

    onEnterPress(e) {
        if(e.keyCode === 13) 
            this.chat();
    }

    render() {
        return (
            <div className="chat-input">
                <input type="text"
                    className="chat-textbox"
                    ref="chatInput"
                    onKeyDown={(e) => this.onEnterPress(e)}
                >
                </input>
                <button 
                    className="chat-input-button"
                    onClick={() => this.chat()}
                >
                    Post
                </button>
            </div>
        );
    }
}

export default connect()(ChatInput);