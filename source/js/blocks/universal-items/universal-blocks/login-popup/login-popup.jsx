import React, { Component } from 'react';

import CrossButton from '../../universal-buttons/cross-button/cross-button';
import SubmitButton from '../../universal-buttons/submit-button/submit-button';

import loginData from './model/login-data';

export default class LoginPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  checkFormData = (e) => {
    e.preventDefault();
    const { changeLoginStatus, onClickHandler } = this.props;
    const userData = Object.fromEntries(new FormData(e.target).entries());
    if (userData.login === loginData.login && userData.password === loginData.password) {
      changeLoginStatus(userData.login);
      onClickHandler(e);
    }
  }

  render() {
    const { onClickHandler } = this.props;
    return (
      <section className="login-popup">
        <CrossButton onClickHandler={onClickHandler} />
        <form className="login-popup__form" method="post" onSubmit={this.checkFormData}>
          <fieldset className="login-popup__inputs-container">
            <legend className="login-popup__fieldset-name">Заполните все поля для авторизации</legend>
            <ul className="login-popup__list">
              <li className="login-popup__item">
                <input type="text" className="login-popup__input" name="login" placeholder="Логин" title="Введите свой логин" required />
              </li>
              <li className="login-popup__item">
                <input type="password" className="login-popup__input" name="password" placeholder="Пароль" title="Введите свой пароль" required />
              </li>
            </ul>
          </fieldset>
          <SubmitButton />
        </form>
      </section>
    );
  }
}

// export default function LogginPopup({ onClickHandler, onSubmitHandler }) {
//   return (
//     <section className="loggin-popup">
//       <CrossButton onClickHandler={onClickHandler} />
//       <form
//         className="loggin-popup__form"
//         method="post"
//         onSubmit={onSubmitHandler.bind(this, new FormData(e.target).entries() )}
//         onSubmit={(e) => {
//           e.preventDefault();
//           console.log(Object.fromEntries(new FormData(e.target).entries()));
//         }}
//       >
//         <fieldset className="loggin-popup__inputs-container">
//           <legend className="loggin-popup__fieldset-name">Заполните все поля для авторизации</legend>
//           <ul className="loggin-popup__list">
//             <li className="loggin-popup__item">
//               <input type="text" className="loggin-popup__input" name="login" placeholder="Логин" title="Введите свой логин" required />
//             </li>
//             <li className="loggin-popup__item">
//               <input type="password" className="loggin-popup__input" name="password" placeholder="Пароль" title="Введите свой пароль" required />
//             </li>
//           </ul>
//         </fieldset>
//         <SubmitButton />
//       </form>
//     </section>
//   );
// }
