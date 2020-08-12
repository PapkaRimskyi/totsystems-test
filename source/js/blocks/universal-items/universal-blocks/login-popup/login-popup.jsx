import React, { Component } from 'react';

import CrossButton from '../../universal-buttons/cross-button/cross-button';
import SubmitButton from '../../universal-buttons/submit-button/submit-button';
import LoginError from '../login-error/login-error';

import loginData from './model/login-data';

export default class LoginPopup extends Component {
  constructor(props) {
    super(props);

    this.state = { errorStatus: false };

    this.checkFormData = this.checkFormData.bind(this);
    this.changeErrorStatus = this.changeErrorStatus.bind(this);
  }

  changeErrorStatus() {
    this.setState((prevState) => ({ errorStatus: !prevState.errorStatus }));
  }

  checkFormData(e) {
    e.preventDefault();
    const { changeLoginStatus, onClickHandler } = this.props;
    const userData = Object.fromEntries(new FormData(e.target).entries());
    if (userData.login === loginData.login && userData.password === loginData.password) {
      changeLoginStatus(userData.login);
      onClickHandler(e);
    } else {
      this.changeErrorStatus();
    }
  }

  render() {
    const { errorStatus } = this.state;
    const { onClickHandler } = this.props;
    return (
      <section className="login-popup">
        <CrossButton onClickHandler={onClickHandler} />
        <form className="login-popup__form" method="post" onSubmit={this.checkFormData}>
          <fieldset className="login-popup__inputs-container">
            <legend className="login-popup__fieldset-name">Заполните все поля для авторизации</legend>
            <ul className="login-popup__list">
              <li className="login-popup__item">
                <input type="text" className="login-popup__input" id="login" name="login" placeholder="Логин" title="Введите свой логин" required />
              </li>
              <li className="login-popup__item">
                <input type="password" className="login-popup__input" id="password" name="password" placeholder="Пароль" title="Введите свой пароль" required />
              </li>
            </ul>
          </fieldset>
          {errorStatus && <LoginError changeErrorStatus={this.changeErrorStatus} />}
          <SubmitButton errorStatus={errorStatus} />
        </form>
      </section>
    );
  }
}
