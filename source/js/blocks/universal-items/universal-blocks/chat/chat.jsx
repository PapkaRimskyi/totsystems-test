/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import ChatMessage from '../chat-message/chat-message';

import scrollToBottom from '../../../utils/scrollToBottom';

export default function Chat({ chatInfo, userName, messageActionButtonHandler }) {
  const [chatList, setChatList] = useState(null);

  useEffect(() => {
    setChatList(document.querySelector('.chat__list'));
  }, []);

  useEffect(() => {
    if (chatList) {
      scrollToBottom(chatList);
    }
  }, [chatList, chatInfo]);

  return (
    <section className="chat" aria-label="Раздел с чатом">
      <ul className="chat__list" onClick={messageActionButtonHandler}>
        {chatInfo.map((message, index) => <ChatMessage key={index} userName={userName} messageNumber={`${index}`} message={message} />)}
      </ul>
    </section>
  );
}

Chat.propTypes = {
  chatInfo: PropTypes.arrayOf(PropTypes.array).isRequired,
  userName: PropTypes.string.isRequired,
  messageActionButtonHandler: PropTypes.func.isRequired,
};
