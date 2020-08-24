import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import '../sass/style.scss';

import Header from './blocks/site-blocks/header/header-site';
import Main from './blocks/site-blocks/main/main';

import { setItemToLocalStorage, removeItemFromLocalStorage, getItemFromLocalStorage } from './blocks/utils/local-storage-functions';

function Index() {
  const [authorizationStatus, setAuthorizationStatus] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    if (getItemFromLocalStorage('userName') && !authorizationStatus) {
      changeAuthorizationStatus();
      setUserName(getItemFromLocalStorage('userName'));
    }
  });

  function logInLogOut(commingUserName) {
    if (!authorizationStatus) {
      setItemToLocalStorage('userName', commingUserName);
      setUserName(commingUserName);
    } else {
      removeItemFromLocalStorage('userName');
    }
    changeAuthorizationStatus();
  }

  function changeAuthorizationStatus() {
    setAuthorizationStatus((prevState) => !prevState);
  }

  return (
    <>
      <Header authorizationStatus={authorizationStatus} userName={userName} logInLogOut={logInLogOut} />
      {authorizationStatus && <Main userName={userName} />}
    </>
  );
}

ReactDOM.render(<HashRouter><Index /></HashRouter>, document.getElementById('root'));
