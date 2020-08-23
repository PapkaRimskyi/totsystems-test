/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';

export default function MessageListAction({ actionButtons }) {
  return (
    <ul className="message-list-action">
      {actionButtons.map((Action, index) => (
        <li key={`action-button-${index}`} className="message-list-action__item">{Action}</li>
      ))}
    </ul>
  );
}

MessageListAction.propTypes = {
  actionButtons: PropTypes.arrayOf(PropTypes.array).isRequired,
};
