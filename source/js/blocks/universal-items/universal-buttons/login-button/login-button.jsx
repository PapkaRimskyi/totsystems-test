import React from 'react';

export default function LoginButton({ buttonName, ariaLabel, onClickHandler }) {
  return (
    <button className="login-button" type="button" aria-label={ariaLabel} onClick={onClickHandler}>{buttonName}</button>
  );
}
