import React from 'react';

import DeleteMessageButton from '../../universal-buttons/delete-message-button/delete-message-button';
import EditMessageButton from '../../universal-buttons/edit-message-button/edit-message-button';
import MessageListAction from '../message-list-action/message-list-action';

export default function ChatMessage(props) {
  const { name, message, time } = props.message;
  const { userName, messageNumber } = props;
  return (
    <li className="chat__item" data-message-number={messageNumber}>
      <p className="chat__user-name">{`${name}, ${time}`}</p>
      <p className="chat__message">{message}</p>
      {name === userName ? <MessageListAction actionButtons={[<DeleteMessageButton />, <EditMessageButton />]} /> : null}
    </li>
  );
}
