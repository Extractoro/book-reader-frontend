import { useState } from 'react';
import s from './Login.module.css';
export default function LoginPage() {
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
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit} className={s.container} autoComplete="off">
      <button className={s.google}>Google</button>
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
      <a href="/#">Реєстрація</a>
      <div className={s.quote}>
        <p className={s.quotetext}>
          Книги - це кораблі думок, що мандрують хвилями часу і дбайливо несуть
          свій дорогоцінний вантаж від покоління до покоління.
        </p>
        <p className={s.author}>Бекон Ф.</p>
      </div>
    </form>
  );
}
