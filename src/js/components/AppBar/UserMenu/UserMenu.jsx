import s from './UserMenu.module.css';
import { useMatchMedia } from '../../../../hooks/use-match-media';
import { useState } from 'react';
import ModalLogout from '../../ModalLogout/ModalLogout';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from 'js/redux/auth/auth-slice';

export default function UserMenu() {
  const user = useSelector(selectCurrentUser);
  const { isMobile } = useMatchMedia();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={s['menu-container']}>
      <div className={s['user-box']}>
        {isMobile && (
          <h3 className={s['user-name']}>{user.name.split('')[0]}</h3>
        )}
      </div>
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
