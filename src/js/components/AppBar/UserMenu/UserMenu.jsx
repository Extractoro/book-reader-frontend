import s from './UserMenu.module.css';
import { useMatchMedia } from '../../../../hooks/use-match-media';
import { useDispatch } from 'react-redux';
import authOperations from '../../../redux/auth/auth-operations';

export default function UserMenu() {
  const dispatch = useDispatch();
  const { isMobile } = useMatchMedia();

  return (
    <div className={s['menu-container']}>
      <div className={s['user-box']}>
        {isMobile && <h3 className={s['user-name']}>M</h3>}
      </div>
      {/* <img src={name.split('')[0]} alt="" width="32px" className="avatar-img" /> */}
      {/* <span className="name-title"> {name}</span> */}
      <button
        type="button"
        className={s['menu-button']}
        onClick={() => dispatch(authOperations.logOut())}
      >
        Вихід
      </button>
    </div>
  );
}
