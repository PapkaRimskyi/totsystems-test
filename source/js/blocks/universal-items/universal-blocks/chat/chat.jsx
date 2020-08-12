import React, { Component } from 'react';

import ChatMessage from '../chat-message/chat-message';

import scrollToBottom from '../../../utils/scrollToBottom';

export default class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = { chatInfo: this.props.chatInfo };

    this.chatList = null;
  }

  componentDidMount() {
    this.chatList = document.querySelector('.chat__list');
    scrollToBottom(this.chatList);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.chatInfo.length !== this.props.chatInfo.length) {
      this.setState({ chatInfo: this.props.chatInfo }, scrollToBottom.bind(this, this.chatList));
    }
  }

  render() {
    const { chatInfo } = this.state;
    return (
      <section className="chat" aria-label="Раздел с чатом">
        <ul className="chat__list">
          {chatInfo.map((message) => <ChatMessage key={`${message.name}-${message.time}`} message={message} />)}
        </ul>
      </section>
    );
  }
}
