import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './redux/store';

import ChatMessages from './components/chatMessages';
import ChatInput from './components/chatInput';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app-window">
          <aside className="sidebar"></aside>
          <div className="chat-window">
          <ChatMessages className="chat-messages"></ChatMessages>
            <ChatInput className="chat-input">
              <input type="text" className="chat-textbox"></input>
              <button className="chat-input-button">Post</button>
            </ChatInput>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
