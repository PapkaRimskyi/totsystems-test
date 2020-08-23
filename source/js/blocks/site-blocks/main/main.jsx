import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { CSSTransition } from 'react-transition-group';

import ChatsPannel from './chats-pannel/chats-pannel';
import Room from './room/room';
import InformationBlock from '../../universal-items/universal-blocks/information-block/information-block';

export default function Main({ userName }) {
  const [activeChatName, setActiveChatNameStatus] = useState(null);

  function chatsPannelHandler(e) {
    e.preventDefault();
    if (e.target.tagName === 'A') {
      setActiveChatNameStatus(e.target.id);
    }
  }

  return (
    <main className="main">
      <ChatsPannel pannelHandler={chatsPannelHandler} />
      <CSSTransition in={Boolean(activeChatName)} classNames="animate" timeout={300} unmountOnExit>
        <Room activeChatName={activeChatName} userName={userName} />
      </CSSTransition>
      {!activeChatName && <InformationBlock information="Выберите чат в списке чатов, чтобы начать переписываться." />}
    </main>
  );
}

Main.propTypes = {
  userName: PropTypes.string.isRequired,
};
