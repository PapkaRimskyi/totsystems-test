import React, { Component } from 'react';

import { CSSTransition } from 'react-transition-group';

import ChatsPannel from './chats-pannel/chats-pannel';
import Room from './room/room';
import InformationBlock from '../../universal-items/universal-blocks/information-block/information-block';

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = { activeChat: null };

    this.chatsPannelHandler = this.chatsPannelHandler.bind(this);
  }

  chatsPannelHandler(e) {
    e.preventDefault();
    if (e.target.tagName === 'A') {
      this.setState({ activeChat: e.target.id });
    }
  }

  render() {
    const { activeChat } = this.state;
    const { userName } = this.props;
    return (
      <main className="main">
        <ChatsPannel pannelHandler={this.chatsPannelHandler} />
        <CSSTransition in={Boolean(activeChat)} classNames="animate" timeout={300} unmountOnExit>
          <Room activeChat={activeChat} userName={userName} />
        </CSSTransition>
        {!activeChat && <InformationBlock information="Выберите чат в списке чатов, чтобы начать переписываться." />}
      </main>
    );
  }
}
