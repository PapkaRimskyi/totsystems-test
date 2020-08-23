import React from 'react';
import PropTypes from 'prop-types';

export default function LoginButton({ buttonName, ariaLabel, onClickHandler }) {
  return (
    <button className="login-button" type="button" aria-label={ariaLabel} onClick={onClickHandler}>{buttonName}</button>
  );
}

LoginButton.propTypes = {
  buttonName: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string,
  onClickHandler: PropTypes.func.isRequired,
};

LoginButton.defaultProps = {
  ariaLabel: 'Логин кнопка',
};
