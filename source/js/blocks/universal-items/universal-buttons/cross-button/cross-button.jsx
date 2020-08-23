import React from 'react';
import PropTypes from 'prop-types';

import Cross from '../../../svg-icons/cross';

export default function CrossButton({ onClickHandler }) {
  return (
    <button className="cross-button" type="button" onClick={onClickHandler}>
      <Cross />
    </button>
  );
}

CrossButton.propTypes = {
  onClickHandler: PropTypes.func.isRequired,
};
