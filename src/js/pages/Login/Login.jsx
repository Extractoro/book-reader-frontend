import { useState } from 'react';
import { useLoginUserMutation } from 'js/redux/auth/authApi';
import s from './Login.module.css';
import { NavLink } from 'react-router-dom';
import googleIcon from 'images/google/google icon.png';
import { Formik } from 'formik';
import validationSchema from 'helpers/ValidationSchema';

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
  const initialValues = {
  email: '',
  password: '',
};
  return (
    <div className={s.wrapper}>
      <div className={s.overlay}>
        <div className={s.background}>
          <Formik
          initialValues = {{
                name: '',
                email: '',
                password: '',
                repeatPassword: '',
            }}
            validationSchema={validationSchema}
           >
            {({ values, errors, touched, handleBlur, handleChange, isValid, dirty }) => (
          
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
              <label className={s.label} htmlFor="email">Електронна адреса</label>
              <input
                className={s.input}
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="your@email.com"
                />
                {touched.email && errors.email && <div className={s.errEmail}><p className={s.errText}>{errors.email}</p></div>}
            <label className={s.label} htmlFor="password">Пароль</label>
              <input
                className={s.input}
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="*********"
                />
                {touched.password && errors.password && <div className={s.errPassword }><p className={s.errText}>{errors.password}</p></div>}

                <button className={s.button}
                    disabled={!isValid && !dirty}
                    onClick={handleSubmit}
                     >Увійти</button>
            <NavLink to="/register" className={s.linkRegister}>
              Реєстрація
            </NavLink>
              </form>
               )}
            </Formik>
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
