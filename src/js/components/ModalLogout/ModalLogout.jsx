import { useLogoutUserMutation } from 'js/redux/auth/authApi';
import { createPortal } from 'react-dom';
import s from './ModalLogout.module.css';
import { Notify } from 'notiflix';

const modalRoot = document.querySelector('#modal-root');

const ModalLogout = ({ open, onClose }) => {
  const [logoutUser] = useLogoutUserMutation();

  const exitLogin = () => {
    try {
      logoutUser().unwrap();
    } catch (error) {
      Notify.warning(`${error.data.message}`);
    }
  };

  if (!open) return null;

  return createPortal(
    <div className={s['backdrop']}>
      <div className={s['modal-mobil']}>
        <h3 className={s['stepsTitle']}>
          Якщо Ви вийдете з програми незбережені дані будуть втрачені
        </h3>
        <div className={s['button-box']}>
          <button className={s['modal-button']} type="button" onClick={onClose}>
            Відміна
          </button>
          <button
            onClick={exitLogin}
            className={s['modal-button-exit']}
            type="button"
          >
            Вийти
          </button>
        </div>
      </div>
    </div>,
    modalRoot
  );
};

export default ModalLogout;
