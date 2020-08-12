import React from 'react';

export default function SubmitButton({ errorStatus }) {
  return (
    <button className="submit-button" type="submit" disabled={errorStatus}>Отправить</button>
  );
}
