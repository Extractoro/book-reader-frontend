import { useState } from 'react';
import s from './Register.module.css'

export default function RegisterPage() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
      default:
        return;
    }
  };

 

  const handleSubmit = event => {
    event.preventDefault();
    formFieldsReset();
  };

  const formFieldsReset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
        <form onSubmit={handleSubmit}
        className={s.container}
        autoComplete="off">
        <button className={s.google}>Google</button>
        <label
        className ={s.label}>
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
        <label
        className ={s.label}>
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

        <label
        className ={s.label}>
          Пароль
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
        
         <label
        className ={s.label}>
          Підтвердити пароль
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

        <button className={s.button} type="submit">Увійти</button>
       <p>Ви вже з нами?<a href=""> Увійти</a></p>
      </form>
  );
}