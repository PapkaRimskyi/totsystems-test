import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import '../sass/style.scss';

import Header from './blocks/site-blocks/header/header-site';
import Main from './blocks/site-blocks/main/main';

import { setItemToLocalStorage, removeItemFromLocalStorage, getItemFromLocalStorage } from './blocks/utils/local-storage-functions';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { login: false, userName: null };

    this.changeLoginStatus = this.changeLoginStatus.bind(this);
  }

  componentDidMount() {
    if (getItemFromLocalStorage('userName')) {
      this.setState((prevState) => ({ userName: getItemFromLocalStorage('userName'), login: !prevState.login }));
    }
  }

  changeLoginStatus(userName) {
    const { login } = this.state;
    if (!login) {
      setItemToLocalStorage('userName', userName);
      this.changeUserName(userName);
    } else {
      removeItemFromLocalStorage('userName');
    }
    this.setState((prevState) => ({ login: !prevState.login }));
  }

  changeUserName(userName) {
    this.setState({ userName });
  }

  render() {
    const { login, userName } = this.state;
    return (
      <>
        <Header loginStatus={login} userName={userName} changeLoginStatus={this.changeLoginStatus} />
        {login && <Main userName={userName} />}
      </>
    );
  }
}

ReactDOM.render(<HashRouter><Index /></HashRouter>, document.getElementById('root'));
