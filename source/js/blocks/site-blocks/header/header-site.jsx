import React, { Component } from 'react';

import { CSSTransition } from 'react-transition-group';

import LoginButton from '../../universal-items/universal-buttons/login-button/login-button';

import LoginPopup from '../../universal-items/universal-blocks/login-popup/login-popup';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { loginPopupStatus: false };

    this.changePopupStatus = this.changePopupStatus.bind(this);
  }

  changePopupStatus(e) {
    e.preventDefault();
    this.setState((prevState) => ({ loginPopupStatus: !prevState.loginPopupStatus }));
  }

  render() {
    const { loginStatus, userName, changeLoginStatus } = this.props;
    const { loginPopupStatus } = this.state;
    return (
      <header className="header">
        <h1 className="header__company-name">Корпоративная сеть Planktonics</h1>
        <div className="header__user-information">
          <p className="header__went-in-like">{loginStatus ? `Вы вошли как: ${userName}` : 'Незнакомец! Кто ты?'}</p>
          <LoginButton buttonName={`${loginStatus ? 'Выйти' : 'Войти'}`} ariaLabel={`${loginStatus ? 'Выйти из аккаунта' : 'Войти в аккаунт'}`} onClickHandler={loginStatus ? changeLoginStatus : this.changePopupStatus} />
        </div>
        <CSSTransition in={loginPopupStatus} classNames="animate" timeout={300} unmountOnExit>
          <LoginPopup onClickHandler={this.changePopupStatus} changeLoginStatus={changeLoginStatus} />
        </CSSTransition>
      </header>
    );
  }
}
