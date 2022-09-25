import { NavLink } from 'react-router-dom';
import sprite from '../../../sprites/library-sprite.svg';
import './Navigation.scss';

const Navigation = () => {
  return (
    <nav className="nav">
      <NavLink to="/" className="link" activeclassname="activeLink">
        <svg className="home">
          <use href={sprite + '#library-flag'} className="icon"></use>
        </svg>
      </NavLink>
      <NavLink to="/" className="link" activeclassname="activeLink">
        <svg className="book">
          <use href={sprite + '#library-icon'} className="icon"></use>
        </svg>
      </NavLink>
    </nav>
  );
};

export default Navigation;
