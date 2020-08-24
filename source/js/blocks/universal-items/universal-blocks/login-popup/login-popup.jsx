import React, { useState } from 'react';
import PropTypes from 'prop-types';

import CrossButton from '../../universal-buttons/cross-button/cross-button';
import SubmitButton from '../../universal-buttons/submit-button/submit-button';
import LoginError from '../login-error/login-error';

import loginData from './model/login-data';

export default function LoginPopup({ popupCrossHandler, logInLogOut }) {
  const [errorStatus, setErrorStatus] = useState(false);

  function checkFormData(e) {
    e.preventDefault();
    const { login: mockLogin, password: mockPassword } = loginData;
    const { login, password } = Object.fromEntries(new FormData(e.target).entries());
    if (login === mockLogin && password === mockPassword) {
      logInLogOut(login);
      popupCrossHandler(e);
    } else {
      changeErrorStatus();
    }
  }

  function changeErrorStatus() {
    setErrorStatus((prevState) => !prevState);
  }

  return (
    <section className="login-popup">
      <CrossButton onClickHandler={popupCrossHandler} />
      <form className="login-popup__form" method="post" onSubmit={checkFormData}>
        <fieldset className="login-popup__inputs-container">
          <legend className="login-popup__fieldset-name">Авторизация</legend>
          <ul className="login-popup__list">
            <li className="login-popup__item">
              <input type="text" className="login-popup__input" id="login" name="login" placeholder="Логин" title="Введите свой логин" required />
            </li>
            <li className="login-popup__item">
              <input type="password" className="login-popup__input" id="password" name="password" placeholder="Пароль" title="Введите свой пароль" required />
            </li>
          </ul>
        </fieldset>
        {errorStatus && <LoginError changeErrorStatus={changeErrorStatus} />}
        <SubmitButton errorStatus={errorStatus} />
      </form>
    </section>
  );
}

LoginPopup.propTypes = {
  popupCrossHandler: PropTypes.func.isRequired,
  logInLogOut: PropTypes.func.isRequired,
};
