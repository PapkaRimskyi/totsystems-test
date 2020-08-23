import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Chat from '../../../universal-items/universal-blocks/chat/chat';
import ChatWriteMessage from '../../../universal-items/universal-blocks/chat-write-message/chat-write-message';
import floodData from '../../../universal-items/universal-blocks/chat/model/flood-chat-data';
import workData from '../../../universal-items/universal-blocks/chat/model/work-chat-data';

export default function Room({ activeChatName, userName }) {
  const [floodDataMessage, setFloodDataMessage] = useState(floodData);
  const [workDataMessage, setWorkDataMessage] = useState(workData);
  const [editModeStatus, setEditModeStatus] = useState(false);
  const [editingMessageData, setEditingMessageData] = useState({ editingText: '', editingMessageID: null });

  useEffect(() => {
    setEditModeStatus(false);
    setEditingMessageData({ editingText: '', editingMessageID: null });
  }, [activeChatName]);

  useEffect(() => {
    if (editModeStatus) {
      dropEditModeAndEditMessageToDefault();
    }
  }, [floodDataMessage, workDataMessage]);

  function messageActionButtonHandler(e) {
    e.preventDefault();
    if (e.target.closest('.message-action-button')) {
      const button = e.target.closest('.message-action-button');
      if (button.classList.contains('message-action-button--delete-button')) {
        deleteMessage(button);
      } else if (button.classList.contains('message-action-button--edit-button')) {
        editMessageInit(button);
      }
    }
  }

  function addMessage(formData) {
    if (activeChatName === 'flood') {
      setFloodDataMessage((prevState) => [...prevState, formData]);
    } else {
      setWorkDataMessage((prevState) => [...prevState, formData]);
    }
  }

  function editMessageInit(button) {
    const parentElement = button.closest('.chat__item');
    if (!editModeStatus) {
      setEditModeStatus((prevState) => !prevState);
      setEditingMessageData({ editingText: parentElement.querySelector('.chat__message').textContent, editingMessageID: parentElement.getAttribute('data-message-number') });
    }
  }

  function changeEditedMessage(correctedMessageText) {
    const { editingMessageID } = editingMessageData;
    const copyMessageList = activeChatName === 'flood' ? floodDataMessage.slice() : workDataMessage.slice();
    copyMessageList[editingMessageID].message = correctedMessageText;
    if (activeChatName === 'flood') {
      setFloodDataMessage(copyMessageList);
    } else {
      setWorkDataMessage(copyMessageList);
    }
  }

  function deleteMessage(button) {
    const copyMessageList = activeChatName === 'flood' ? floodDataMessage.slice() : workDataMessage.slice();
    copyMessageList.splice(button.closest('.chat__item').getAttribute('data-message-number'), 1);
    if (activeChatName === 'flood') {
      setFloodDataMessage(copyMessageList);
    } else {
      setWorkDataMessage(copyMessageList);
    }
    dropEditModeAndEditMessageToDefault();
  }

  function dropEditModeAndEditMessageToDefault() {
    setEditModeStatus(false);
    setEditingMessageData({ editingText: '', editingMessageID: null });
  }

  return (
    <section className="room" aria-label="Комната">
      <Chat chatInfo={activeChatName === 'flood' ? floodDataMessage : workDataMessage} userName={userName} messageActionButtonHandler={messageActionButtonHandler} />
      <ChatWriteMessage addMessage={addMessage} changeEditedMessage={changeEditedMessage} editModeStatus={editModeStatus} editingMessageData={editingMessageData} activeChatName={activeChatName} userName={userName} />
    </section>
  );
}

Room.propTypes = {
  activeChatName: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
};
