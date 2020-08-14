import React from 'react';

import Edit from '../../../svg-icons/edit';

export default function EditMessageButton() {
  return (
    <button className="message-action-button message-action-button--edit-button" type="button">
      <Edit />
    </button>
  );
}
