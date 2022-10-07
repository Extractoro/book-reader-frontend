import { useState } from 'react';
import { useLoginUserMutation } from 'js/redux/auth/authApi';
import s from './Login.module.css';
import { NavLink } from 'react-router-dom';
import googleIcon from 'images/google/google icon.png';

export default function LoginPage() {
  const [login] = useLoginUserMutation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    login({ email, password });
    setEmail('');
    setPassword('');
  };
  return (
    <div className={s.wrapper}>
      <div className={s.overlay}>
        <div className={s.background}>
          <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
            <button className={s.google}>
              <img
                src={googleIcon}
                alt="google-icon"
                className={s.google_icon}
              />
              <NavLink to="/#" className={s.linkGoogle}>
                Google
              </NavLink>
            </button>
            <label className={s.label}>Електронна адреса</label>
              <input
                className={s.input}
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                required
              placeholder="your@email.com"
              minLength={6}
              maxLength={40}
              />
            <label className={s.label}>Пароль</label>
              <input
                className={s.input}
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                required
              placeholder="*********"
              minLength={6}
              maxLength={30}
              />

            <button className={s.button}>Увійти</button>
            <NavLink to="/register" className={s.linkRegister}>
              Реєстрація
            </NavLink>
          </form>
        </div>
      </div>
      <div className={s.quote}>
        <span className={s.symbol}>“</span>
        <h2 className={s.quotetext}>
          Книги - це кораблі думок, що мандрують хвилями часу і дбайливо несуть
          свій дорогоцінний вантаж від покоління до покоління.
        </h2>
        <hr className={s.line}></hr>
        <p className={s.author}>Бекон Ф.</p>
      </div>
    </div>
  );
}