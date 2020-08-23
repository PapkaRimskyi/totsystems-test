import React from 'react';
import PropTypes from 'prop-types';

export default function SubmitButton({ errorStatus }) {
  return (
    <button className="submit-button" type="submit" disabled={errorStatus}>Отправить</button>
  );
}

SubmitButton.propTypes = {
  errorStatus: PropTypes.bool.isRequired,
};
