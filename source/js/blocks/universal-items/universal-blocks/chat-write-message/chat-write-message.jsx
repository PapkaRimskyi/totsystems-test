import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import usePrevious from '../../../custom-hooks/use-previous';

import SubmitButton from '../../universal-buttons/submit-button/submit-button';

import messageFormatting from '../../../utils/message-formatting';

export default function ChatWriteMessage({ addMessage, changeEditedMessage, editModeStatus, editingMessageData, activeChatName, userName }) {
  const [messageText, setMessageText] = useState('');
  const prevActiveChat = usePrevious(activeChatName);
  const prevEditModeStatus = usePrevious(editModeStatus);

  useEffect(() => {
    if (prevActiveChat !== activeChatName) {
      setMessageText('');
    }
    if (prevEditModeStatus !== editModeStatus) {
      const { editingText } = editingMessageData;
      setMessageText(editingText);
    }
  }, [activeChatName, editModeStatus]);

  function submitHandler(e) {
    e.preventDefault();
    if (!editModeStatus) {
      if (messageText) {
        const formattedUserInformation = messageFormatting(messageText, userName);
        setMessageText('');
        addMessage(formattedUserInformation);
      }
    } else {
      changeEditedMessage(messageText);
    }
  }

  function enterKeyHandler(e) {
    if (e.key === 'Enter' && messageText) {
      submitHandler(e);
    }
  }

  function onChangeText(e) {
    e.preventDefault();
    setMessageText(e.target.value);
  }

  return (
    <form method="post" className="chat-write-message" onSubmit={submitHandler}>
      <fieldset className="chat-write-message__fieldset">
        <textarea className="chat-write-message__message-input" onKeyDown={enterKeyHandler} onChange={onChangeText} name="message" id="message" placeholder="Ваше сообщение" title="Начните вводить ваше сообщение в этом окне" value={messageText} />
      </fieldset>
      <SubmitButton />
    </form>
  );
}

ChatWriteMessage.propTypes = {
  addMessage: PropTypes.func.isRequired,
  changeEditedMessage: PropTypes.func.isRequired,
  editModeStatus: PropTypes.bool.isRequired,
  editingMessageData: PropTypes.objectOf(PropTypes.object).isRequired,
  activeChatName: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
};
