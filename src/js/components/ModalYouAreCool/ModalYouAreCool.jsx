import { createPortal } from 'react-dom';
import sprite from '../../../sprites/modalyouarecool.svg';
import s from '../ModalYouAreCool/ModalYouAreCool.module.css';

const modalRoot = document.querySelector('#modal-root');

function ModalYouAreCool() {
  return createPortal(
    <>
      <div className={s.backdrop}>
        <div className={s.modal}>
          <svg className={s.icon} width="54" height="54">
            <use href={sprite + '#icon-thumb_up_grey'}></use>
          </svg>
          <p className={s.text}>
            Ти молодчина, але потрібно швидше! Наступного разу тобі все
            вдасться)
          </p>
          <div className={s.sectionBtn}>
            <button className={s.modalBtn}>Нове тренування</button>
            <button className={s.modalBtn}>Назад</button>
          </div>
        </div>
      </div>
    </>,
    modalRoot
  );
}
export default ModalYouAreCool;
