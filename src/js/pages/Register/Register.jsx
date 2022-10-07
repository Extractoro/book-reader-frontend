import {
  useRegistrationUserMutation,
  // useFetchGoogleAccountMutation,
} from 'js/redux/auth/authApi';
import s from './Register.module.css';
import { NavLink } from 'react-router-dom';
import googleIcon from 'images/google/google icon.png';
import InfoText from 'js/components/Infotext/InfoText';
import { Notify } from 'notiflix';
import Media from 'react-media';
import { useState } from 'react'; 

export default function RegisterPage() {
  const [registerUser] = useRegistrationUserMutation();
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

  const handleSubmit = event => {
    event.preventDefault();
    registerUser({ name, email, password, repeatPassword });
    Notify.success('Реєстрація пройшла успішно');
    formFieldsReset();
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
              <form 
            className={s.form}
            onSubmit={handleSubmit}
              >
            <button className={s.google}>
              <img
                src={googleIcon}
                alt="google-icon"
                className={s.google_icon}
              />
              <NavLink to="" className={s.linkGoogle}>
                Google
              </NavLink>
            </button>
            <label className={s.label} htmlFor="name">Ім’я</label>
              <input
                className={s.input}
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
              placeholder="Ім’я"
              required
              minLength={3}
              maxLength={50}
                />
            <label className={s.label} htmlFor="email">Електронна адреса</label>
              <input
                className={s.input}
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
              placeholder="your@email.com"
              required
              minLength={6}
              maxLength={40}
                />
            <label className={s.label} htmlFor="password">Пароль</label>
              <input
                className={s.input}
                type="password"
              name="password"
              onChange={handleChange}
                value={password}
              placeholder="*********"
              required
              minLength={6}
              maxLength={30}
                />
            <label className={s.label} htmlFor="repeatPassword">Підтвердити пароль</label>
              <input
                className={s.input}
                type="password"
                name="repeatPassword"
                value={repeatPassword}
                onChange={handleChange}  
              placeholder="*********"
              required
              minLength={6}
              maxLength={40}
                />
                   <button
              className={s.button}
                    type="submit"
                  >
                     Зареєструватися
                  </button>
              <NavLink to="/login" className={s.linkLogin}>
              </NavLink>
            <p className={s.text}>
              Ви вже з нами?
              <NavLink to="/login" className={s.linkLogin}>
                Увійти
              </NavLink>
            </p>
            </form>
        </div>
      </div>
      <Media
          query="(min-width: 768px)"
          render={() => <InfoText />}
        />
    </div>
  );
}
