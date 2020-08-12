import React, { Component } from 'react';

export default class ChatMessage extends Component {
  constructor(props) {
    super(props);
    this.state = { messageUserName: this.props.message.name };
  }

  render() {
    const { name, message, time } = this.props.message;
    return (
      <li className="chat__item">
        <p className="chat__user-name">{`${name}, ${time}`}</p>
        <p className="chat__message">{message}</p>
      </li>
    );
  }
}
