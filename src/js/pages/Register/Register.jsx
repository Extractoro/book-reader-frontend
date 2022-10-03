import {
  useRegistrationUserMutation,
  useFetchGoogleAccountMutation,
} from 'js/redux/auth/authApi';
import { useState } from 'react';
import s from './Register.module.css';
import { NavLink } from 'react-router-dom';
import googleIcon from 'images/google/google icon.png';
import sprite from '../../../sprites/mobileinfo-sprite.svg';
import { Notify } from 'notiflix';
import { selectCurrentUser } from 'js/redux/auth/auth-slice';
import { useSelector } from 'react-redux';

export default function RegisterPage() {
  const user = useSelector(selectCurrentUser);
  const [google] = useFetchGoogleAccountMutation(
    { user, undefined },
    {
      skip: true,
      selectFromResult: null,
    }
  );
  const [register] = useRegistrationUserMutation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'repeatPassword':
        setRepeatPassword(value);
        break;
      default:
        return;
    }
  };

  const onMessage = () => {
    if (
      name.length > 0 &&
      email.length > 0 &&
      password.length > 0 &&
      repeatPassword.length > 0
    ) {
      Notify.success('Ви зареєструвалися. Теперь залогінтесь');
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    register({ name, email, password, repeatPassword });
    formFieldsReset();
  };

  const registerWithGoogle = async () => {
    await google();
  };

  const formFieldsReset = () => {
    setName('');
    setEmail('');
    setPassword('');
    setRepeatPassword('');
  };

  return (
    <div className={s.wrapper}>
      <div className={s.overlay}>
        <div className={s.background}>
          <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
            <button className={s.google} onClick={registerWithGoogle}>
              <img
                src={googleIcon}
                alt="google-icon"
                className={s.google_icon}
              />
              <NavLink to="/#" className={s.linkGoogle}>
                Google
              </NavLink>
            </button>
            <label className={s.label}>
              Ім’я
              <input
                className={s.input}
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                required
                placeholder="Ім’я"
              />
            </label>
            <label className={s.label}>
              Електронна адреса
              <input
                className={s.input}
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                required
                placeholder="email@email.com"
              />
            </label>

            <label className={s.label}>
              Пароль
              <input
                className={s.input}
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                required
                placeholder="*********"
              />
            </label>

            <label className={s.label}>
              Підтвердити пароль
              <input
                className={s.input}
                type="password"
                name="repeatPassword"
                value={repeatPassword}
                onChange={handleChange}
                required
                placeholder="*********"
              />
            </label>
            <button
              className={s.button}
              type="submit"
              onClick={() => onMessage()}
            >
              Зареєструватися
            </button>
            <p className={s.text}>
              Ви вже з нами?
              <NavLink to="/login" className={s.linkLogin}>
                Увійти
              </NavLink>
            </p>
          </form>
        </div>
      </div>
      <div className={s.infoWrapper}>
        <h2 className={s.title}>Books Reading</h2>
        <p className={s.titlesecond}>Допоможе вам: </p>
        <ul className={s.infoList}>
          <li className={s.text}>
            <svg className={s.vector} width="4" height="8">
              <use href={sprite + '#icon-Vector'}></use>
            </svg>
            Швидше сформулювати свою ціль і розпочати читати
          </li>
          <li className={s.text}>
            <svg className={s.vector} width="4" height="8">
              <use href={sprite + '#icon-Vector'}></use>
            </svg>
            Пропорційно розподілити навантаження на кожний день
          </li>
          <li className={s.text}>
            <svg className={s.vector} width="4" height="8">
              <use href={sprite + '#icon-Vector'}></use>
            </svg>
            Відстежувати особистий успіх
          </li>
        </ul>
        <p className={s.titlesecond}>Також ви зможете:</p>
        <ul className={s.infoList}>
          <li className={s.text}>
            <svg className={s.vector} width="4" height="8">
              <use href={sprite + '#icon-Vector'}></use>
            </svg>
            Формувати особисту думку незалежну від інших
          </li>
          <li className={s.text}>
            <svg className={s.vector} width="4" height="8">
              <use href={sprite + '#icon-Vector'}></use>
            </svg>
            Підвищити свої професійні якості опираючись на нові знання
          </li>
          <li className={s.text}>
            <svg className={s.vector} width="4" height="8">
              <use href={sprite + '#icon-Vector'}></use>
            </svg>
            Стати цікавим співрозмовником
          </li>
        </ul>
      </div>
    </div>
  );
}
