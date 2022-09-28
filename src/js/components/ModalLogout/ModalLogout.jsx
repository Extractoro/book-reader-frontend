import { createPortal } from 'react-dom';
import s from './ModalLogout.module.css';

const modalRoot = document.querySelector('#modal-root');

const ModalLogout = () => {
  return createPortal(
    <div className={s['backdrop']}>
      <div className={s['modal-mobil']}>
        <h3 className={s['stepsTitle']}>
          Якщо Ви вийдете з програми незбережені дані будуть втрачені
        </h3>
        <div className={s['button-box']}>
          <button className={s['modal-button']} type="button">
            Відміна
          </button>
          <button className={s['modal-button-exit']} type="button">
            Вийти
          </button>
        </div>
      </div>
    </div>,
    modalRoot
  );
};

export default ModalLogout;
