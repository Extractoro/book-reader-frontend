import { useState } from 'react';
import s from './Login.module.css';
import sprite from 'sprites/google-sprite.svg';
import { useLoginUserMutation } from 'js/redux/auth/authApi';

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
        <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
          <button className={s.google}>
            <svg width="18" height="18">
              <use href={sprite + '#icon-google'} />
            </svg>
            Google
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

          <button className={s.button} type="submit">
            Увійти
          </button>
          <a className={s.register} href="/#">
            Реєстрація
          </a>
        </form>
      </div>
      <div className={s.quote}>
        <h2 className={s.quotetext}>
          Книги - це кораблі думок, що мандрують хвилями часу і дбайливо несуть
          свій дорогоцінний вантаж від покоління до покоління.
        </h2>
        <p className={s.author}>Бекон Ф.</p>
      </div>
    </div>
  );
}
