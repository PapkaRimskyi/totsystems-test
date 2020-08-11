import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../sass/style.scss';

import Header from './blocks/site-blocks/header/header-site';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { login: false, userName: null };

    this.changeLoginStatus = this.changeLoginStatus.bind(this);
  }

  changeLoginStatus(userName) {
    const { login } = this.state;
    if (!login) {
      this.changeUserName(userName);
    }
    this.setState((prevState) => ({ login: !prevState.login }));
  }

  changeUserName(userName) {
    this.setState({ userName });
  }

  render() {
    const { login, userName } = this.state;
    return (
      <Header loginStatus={login} userName={userName} changeLoginStatus={this.changeLoginStatus} />
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
