/* eslint-disable react/no-array-index-key */
import React from 'react';

export default function MessageListAction({ actionButtons }) {
  return (
    <ul className="message-list-action">
      {actionButtons.map((Action, index) => (
        <li key={`action-button-${index}`} className="message-list-action__item">{Action}</li>
      ))}
    </ul>
  );
}
