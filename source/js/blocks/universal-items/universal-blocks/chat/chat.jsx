/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-bind */
import React, { Component } from 'react';

import ChatMessage from '../chat-message/chat-message';

import scrollToBottom from '../../../utils/scrollToBottom';

export default class Chat extends Component {
  constructor(props) {
    super(props);

    this.chatList = null;
  }

  componentDidMount() {
    this.chatList = document.querySelector('.chat__list');
    scrollToBottom(this.chatList);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.chatInfo !== this.props.chatInfo) {
      scrollToBottom(this.chatList);
    }
  }

  render() {
    const { chatInfo, userName, messageActionButtonHandler } = this.props;
    return (
      <section className="chat" aria-label="Раздел с чатом">
        <ul className="chat__list" onClick={messageActionButtonHandler}>
          {chatInfo.map((message, index) => <ChatMessage userName={userName} messageNumber={`${index}`} key={index} message={message} messageID={index} />)}
        </ul>
      </section>
    );
  }
}
