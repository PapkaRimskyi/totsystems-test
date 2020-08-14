import React, { Component } from 'react';

import Chat from '../../../universal-items/universal-blocks/chat/chat';
import ChatWriteMessage from '../../../universal-items/universal-blocks/chat-write-message/chat-write-message';
import floodData from '../../../universal-items/universal-blocks/chat/model/flood-chat-data';
import workData from '../../../universal-items/universal-blocks/chat/model/work-chat-data';

export default class Room extends Component {
  constructor(props) {
    super(props);

    this.state = { floodDataMessage: floodData, workDataMessage: workData, editModeStatus: false, editingMessageData: { editingText: '', editingMessageID: null } };

    this.addMessage = this.addMessage.bind(this);
    this.messageActionButtonHandler = this.messageActionButtonHandler.bind(this);
    this.changeEditedMessage = this.changeEditedMessage.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.activeChat !== this.props.activeChat) {
      this.setState({ editModeStatus: false, editingMessageData: { editingText: '', editingMessageID: null } });
    }
  }

  messageActionButtonHandler(e) {
    e.preventDefault();
    if (e.target.closest('.message-action-button')) {
      const button = e.target.closest('.message-action-button');
      if (button.classList.contains('message-action-button--delete-button')) {
        this.deleteMessage(button);
      } else if (button.classList.contains('message-action-button--edit-button')) {
        this.editMessageInit(button);
      }
    }
  }

  addMessage(formData) {
    const { activeChat } = this.props;
    return activeChat === 'flood' ? this.setState((prevState) => ({ floodDataMessage: [...prevState.floodDataMessage, formData] }))
      : this.setState((prevState) => ({ workDataMessage: [...prevState.workDataMessage, formData] }));
  }

  deleteMessage(button) {
    const { floodDataMessage, workDataMessage } = this.state;
    const { activeChat } = this.props;
    const copyMessageList = activeChat === 'flood' ? floodDataMessage.slice() : workDataMessage.slice();
    copyMessageList.splice(button.closest('.chat__item').getAttribute('data-message-number'), 1);
    return activeChat === 'flood' ? this.setState({ floodDataMessage: copyMessageList }) : this.setState({ workDataMessage: copyMessageList });
  }

  editMessageInit(button) {
    const { editModeStatus } = this.state;
    const parentElement = button.closest('.chat__item');
    if (!editModeStatus) {
      this.setState((prevState) => ({
        editModeStatus: !prevState.editModeStatus,
        editingMessageData: { editingText: parentElement.querySelector('.chat__message').textContent, editingMessageID: parentElement.getAttribute('data-message-number') },
      }));
    }
  }

  changeEditedMessage(correctedMessageText) {
    const { floodDataMessage, workDataMessage } = this.state;
    const { editingMessageID } = this.state.editingMessageData;
    const { activeChat } = this.props;
    const copyMessageList = activeChat === 'flood' ? floodDataMessage.slice() : workDataMessage.slice();
    copyMessageList[editingMessageID].message = correctedMessageText;
    return activeChat === 'flood' ? this.setState({ floodDataMessage: copyMessageList }, this.dropEditSettingsToDefault) : this.setState({ workDataMessage: copyMessageList }, this.dropEditSettingsToDefault);
  }

  dropEditSettingsToDefault() {
    this.setState((prevState) => ({ editModeStatus: !prevState.editModeStatus, editingMessageData: { editingText: '', editingMessageID: null } }));
  }

  render() {
    const { activeChat, userName } = this.props;
    const { floodDataMessage, workDataMessage, editModeStatus, editingMessageData } = this.state;
    return (
      <section className="room" aria-label="Комната">
        <Chat userName={userName} chatInfo={activeChat === 'flood' ? floodDataMessage : workDataMessage} messageActionButtonHandler={this.messageActionButtonHandler} />
        <ChatWriteMessage addMessage={this.addMessage} changeEditedMessage={this.changeEditedMessage} editModeStatus={editModeStatus} editingMessageData={editingMessageData} activeChat={activeChat} userName={userName} />
      </section>
    );
  }
}
