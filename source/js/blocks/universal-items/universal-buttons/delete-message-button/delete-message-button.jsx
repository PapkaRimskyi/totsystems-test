import React from 'react';

import Cross from '../../../svg-icons/cross';

export default function DeleteMessageButton() {
  return (
    <button className="message-action-button message-action-button--delete-button" type="button" aria-label="Удалить сообщение">
      <Cross />
    </button>
  );
}
