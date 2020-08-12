import React, { Component } from 'react';

import Chat from '../../../universal-items/universal-blocks/chat/chat';
import ChatWriteMessage from '../../../universal-items/universal-blocks/chat-write-message/chat-write-message';
import floodData from '../../../universal-items/universal-blocks/chat/model/flood-chat-data';
import workData from '../../../universal-items/universal-blocks/chat/model/work-chat-data';

export default class Room extends Component {
  constructor(props) {
    super(props);

    this.state = { floodDataMessage: floodData, workDataMessage: workData };

    this.addMessage = this.addMessage.bind(this);
  }

  addMessage(formData) {
    const { activeChat } = this.props;
    if (activeChat === 'flood') {
      this.setState((prevState) => ({ floodDataMessage: [...prevState.floodDataMessage, formData] }));
    } else {
      this.setState((prevState) => ({ workDataMessage: [...prevState.workDataMessage, formData] }));
    }
  }

  render() {
    const { activeChat, userName } = this.props;
    const { floodDataMessage, workDataMessage } = this.state;
    return (
      <section className="room" aria-label="Комната">
        <Chat chatInfo={activeChat === 'flood' ? floodDataMessage : workDataMessage} />
        <ChatWriteMessage addMessage={this.addMessage} activeChat={activeChat} userName={userName} />
      </section>
    );
  }
}
