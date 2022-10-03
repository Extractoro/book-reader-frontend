import { useLogoutUserMutation } from 'js/redux/auth/authApi';
import { createPortal } from 'react-dom';
import s from './ModalLogout.module.css';
import { Notify } from 'notiflix';
import { selectCurrentUser } from 'js/redux/auth/auth-slice';
import { useSelector } from 'react-redux';

const modalRoot = document.querySelector('#modal-root');

const ModalLogout = ({ open, onClose }) => {
  const user = useSelector(selectCurrentUser);
  const [logoutUser] = useLogoutUserMutation(user, {
    skip: true,
  });

  const exitLogin = () => {
    logoutUser()
      .then()
      .catch(error => {
        Notify.error({
          text: `Не вдалося вийти з облікового запису, текст помилки ${error}`,
        });
      });
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
