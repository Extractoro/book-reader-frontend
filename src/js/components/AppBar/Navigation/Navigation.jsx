import { NavLink } from 'react-router-dom';
import sprite from '../../../../sprites/header-sprite.svg';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={s['nav']}>
      <NavLink
        to="/library"
        className={s['link']}
        activeclassname={s['activeLink']}
      >
        <svg className={s['book']} width="22" height="18">
          <use href={sprite + '#header-vector'}></use>
        </svg>
      </NavLink>
      <NavLink to="/" className={s['link']} activeclassname={s['activeLink']}>
        <svg className={s['home']} width="20" height="18">
          <use href={sprite + '#header-home'}></use>
        </svg>
      </NavLink>
    </nav>
  );
};

export default Navigation;
