import React, { Component } from 'react';

import SubmitButton from '../../universal-buttons/submit-button/submit-button';

import messageFormatting from '../../../utils/message-formatting';

export default class ChatWriteMessage extends Component {
  constructor(props) {
    super(props);

    this.state = { messageText: '' };

    this.submitHandler = this.submitHandler.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
    this.enterKeyHandler = this.enterKeyHandler.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.activeChat !== this.props.activeChat) {
      this.setState({ messageText: '' });
    }
  }

  onChangeText(e) {
    e.preventDefault();
    this.setState({ messageText: e.target.value.trim() });
  }

  submitHandler(e) {
    e.preventDefault();
    const { addMessage, userName } = this.props;
    const { messageText } = this.state;
    if (messageText) {
      const formattedUserInformation = messageFormatting(messageText, userName);
      this.setState({ messageText: '' });
      addMessage(formattedUserInformation);
    }
  }

  enterKeyHandler(e) {
    const { messageText } = this.state;
    if (e.key === 'Enter' && messageText) {
      this.submitHandler(e);
    }
  }

  render() {
    const { messageText } = this.state;
    return (
      <form method="post" className="chat-write-message" onSubmit={this.submitHandler}>
        <fieldset className="chat-write-message__fieldset">
          <textarea className="chat-write-message__message-input" onKeyDown={this.enterKeyHandler} onChange={this.onChangeText} name="message" id="message" placeholder="Ваше сообщение" title="Начните вводить ваше сообщение в этом окне" value={messageText} />
        </fieldset>
        <SubmitButton />
      </form>
    );
  }
}
