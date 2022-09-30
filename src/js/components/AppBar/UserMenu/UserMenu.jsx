import s from './UserMenu.module.css';
import { useMatchMedia } from '../../../../hooks/use-match-media';
import { useState } from 'react';
import ModalLogout from '../../ModalLogout/ModalLogout';
// import { useDispatch } from 'react-redux';
// import authOperations from '../../../redux/auth/auth-operations';

export default function UserMenu() {
  // const dispatch = useDispatch();
  const { isMobile } = useMatchMedia();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={s['menu-container']}>
      <div className={s['user-box']}>
        {isMobile && <h3 className={s['user-name']}>M</h3>}
      </div>
      {/* <img src={name.split('')[0]} alt="" width="32px" className="avatar-img" /> */}
      {/* <span className="name-title"> {name}</span> */}
      <button
        onClick={() => setIsOpen(true)}
        type="button"
        className={s['menu-button']}
      >
        Вихід
      </button>
      <ModalLogout open={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}
