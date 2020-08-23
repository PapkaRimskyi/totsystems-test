import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { CSSTransition } from 'react-transition-group';

import LoginButton from '../../universal-items/universal-buttons/login-button/login-button';

import LoginPopup from '../../universal-items/universal-blocks/login-popup/login-popup';

export default function Header({ authorizationStatus, userName, logInLogOut }) {
  const [loginPopupStatus, setLoginPopupStatus] = useState(false);

  function changePopupStatus(e) {
    e.preventDefault();
    setLoginPopupStatus((prevState) => !prevState);
  }

  return (
    <header className="header">
      <h1 className="header__company-name">Корпоративная сеть Planktonics</h1>
      <div className="header__user-information">
        <p className="header__went-in-like">{authorizationStatus ? `Вы вошли как: ${userName}` : 'Незнакомец! Кто ты?'}</p>
        <LoginButton buttonName={`${authorizationStatus ? 'Выйти' : 'Войти'}`} ariaLabel={`${authorizationStatus ? 'Выйти из аккаунта' : 'Войти в аккаунт'}`} onClickHandler={authorizationStatus ? logInLogOut : changePopupStatus} />
      </div>
      <CSSTransition in={loginPopupStatus} classNames="animate" timeout={300} unmountOnExit>
        <LoginPopup popupCrossHandler={changePopupStatus} logInLogOut={logInLogOut} />
      </CSSTransition>
    </header>
  );
}

Header.propTypes = {
  authorizationStatus: PropTypes.bool.isRequired,
  userName: PropTypes.string.isRequired,
  logInLogOut: PropTypes.func.isRequired,
};
