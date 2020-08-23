/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export default function ChatsPannel({ pannelHandler }) {
  return (
    <nav className="chats-pannel" aria-label="Список чатов">
      <ul className="chats-pannel__list" onClick={pannelHandler}>
        <li className="chats-pannel__item">
          <NavLink to="/flood-chat" id="flood" className="chats-pannel__link" activeClassName="chats-pannel__link--active">Флудилка</NavLink>
        </li>
        <li className="chats-pannel__item">
          <NavLink to="/work-chat" id="work" className="chats-pannel__link" activeClassName="chats-pannel__link--active">Рабочий чятик</NavLink>
        </li>
      </ul>
    </nav>
  );
}

ChatsPannel.propTypes = {
  pannelHandler: PropTypes.func.isRequired,
};
