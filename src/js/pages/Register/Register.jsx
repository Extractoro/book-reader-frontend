import {
  useRegistrationUserMutation,
  // useFetchGoogleAccountMutation,
} from 'js/redux/auth/authApi';
import { useState } from 'react';
import s from './Register.module.css';
import { NavLink } from 'react-router-dom';
import googleIcon from 'images/google/google icon.png';
import InfoText from 'js/components/Infotext/InfoText';
import { Notify } from 'notiflix';
import Media from 'react-media';
import { Formik } from 'formik';
import validationSchema from 'helpers/ValidationSchema';
// import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
// import { selectIsLoggedIn } from 'js/redux/auth/auth-slice';

export default function RegisterPage() {
  const [registerUser] = useRegistrationUserMutation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  // const dispatch = useDispatch();
  // const isLoggedIn = useSelector(selectIsLoggedIn);


  const handleSubmit = event => {
    event.preventDefault();
    registerUser({ name, email, password, repeatPassword });
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
          <Formik
              initialValues = {{
                name: '',
                email: '',
                password: '',
                repeatPassword: '',
            }}
            validationSchema={validationSchema}
           >
            {({ values, errors, touched, handleBlur,handleChange,isValid,dirty}) => (
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
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Ім’я"
                />
                {touched.name && errors.name && <div className={s.errName}><p className={s.errText}>{errors.name}</p></div>}
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

            <label className={s.label} htmlFor="repeatPassword">Підтвердити пароль</label>
              <input
                className={s.input}
                type="password"
                name="repeatPassword"
                value={values.repeatPassword}
                onChange={handleChange}  
                onBlur={handleBlur}
                placeholder="*********"
                />
                {touched.repeatPassword && errors.repeatPassword && <div className={s.errRepeatPassword}><p className={s.errText}>{errors.repeatPassword}</p></div>}
           
            
                   <button
              className={s.button}
                    type="submit"
                    disabled={!isValid && !dirty}
                    onClick={handleSubmit}
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
            )}
          </Formik>
        </div>
      </div>
      <Media
          query="(min-width: 768px)"
          render={() => <InfoText />}
        />
    </div>
  );
}
