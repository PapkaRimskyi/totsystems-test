import React, { Component } from 'react';

export default class LoginError extends Component {
  constructor(props) {
    super(props);

    this.timeoutTimer = null;
  }

  componentDidMount() {
    this.timeoutTimer = setTimeout(() => this.clearErrorTimeout(), 3000);
  }

  clearErrorTimeout() {
    const { changeErrorStatus } = this.props;
    clearTimeout(this.timeoutTimer);
    changeErrorStatus();
  }

  render() {
    return (
      <p className="login-error">Неправильный логин или пароль</p>
    );
  }
}
