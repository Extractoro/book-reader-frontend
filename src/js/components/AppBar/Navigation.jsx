import { NavLink } from 'react-router-dom';
import sprite from '../../../sprites/header-sprite.svg';
import './Navigation.scss';

const Navigation = () => {
  return (
    <nav className="nav">
      <NavLink to="/" className="link" activeclassname="activeLink">
        <svg className="home" width="20">
          <use href={sprite + '#header-home'}></use>
        </svg>
      </NavLink>
      <NavLink to="/" className="link" activeclassname="activeLink">
        <svg className="book" width="20">
          <use href={sprite + '#header-vector'}></use>
        </svg>
      </NavLink>
    </nav>
  );
};

export default Navigation;
