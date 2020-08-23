import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

export default function LoginError({ changeErrorStatus }) {
  let timeoutTimer = null;

  useEffect(() => {
    timeoutTimer = setTimeout(() => clearErrorTimeout(), 2000);
  });

  function clearErrorTimeout() {
    clearTimeout(timeoutTimer);
    changeErrorStatus();
  }

  return (
    <p className="login-error">Неправильный логин или пароль</p>
  );
}

LoginError.propTypes = {
  changeErrorStatus: PropTypes.func.isRequired,
};
