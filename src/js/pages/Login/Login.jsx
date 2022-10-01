import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import s from './Login.module.css';
import { NavLink } from 'react-router-dom';
import googleIcon from 'images/google/google icon.png';


export default function LoginPage() {
  const dispatch = useDispatch();
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
    dispatch(authOperations.login({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div className={s.wrapper}>
      <div className={s.overlay}>
        <div className={s.background}>
        <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
            <button className={s.google}>
              <img src={googleIcon} alt="google-icon" className={s.google_icon} />
              <NavLink to='/#' className={s.linkGoogle}>Google</NavLink>
          </button>
          <label className={s.label}>
            Email
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
            Password
            <input
              className={s.input}
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              required
              placeholder="******"
            />
          </label>

          <button className={s.button}>
            Увійти
            </button>
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
