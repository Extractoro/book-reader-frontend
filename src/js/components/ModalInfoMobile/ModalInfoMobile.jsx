import sprite from '../../../sprites/mobileinfo-sprite.svg';
import { NavLink } from 'react-router-dom';
import s from '../ModalInfoMobile/ModalInfoMobile.module.css';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

function ModalInfoMobile() {
  return createPortal (
    <section className={s.backdrop}>
      <div className={s.modal}>
        <h2 className={s.title}>Books Reading</h2>
        <p className={s.titlesecond}>Допоможе вам: </p>
        <ul>
          <li className={s.text}>
            <svg className={s.vector} width="4" height="8">
              <use href={sprite + '#icon-Vector'}></use>
            </svg>
            Швидше сформулювати свою ціль і розпочати читати
          </li>
          <li className={s.text}>
            <svg className={s.vector} width="4" height="8">
              <use href={sprite + '#icon-Vector'}></use>
            </svg>
            Пропорційно розподілити навантаження на кожний день
          </li>
          <li className={s.text}>
            <svg className={s.vector} width="4" height="8">
              <use href={sprite + '#icon-Vector'}></use>
            </svg>
            Відстежувати особистий успіх
          </li>
        </ul>
        <p className={s.titlesecond}>Також ви зможете:</p>
        <ul>
          <li className={s.text}>
            <svg className={s.vector} width="4" height="8">
              <use href={sprite + '#icon-Vector'}></use>
            </svg>
            Формувати особисту думку незалежну від інших
          </li>
          <li className={s.text}>
            <svg className={s.vector} width="4" height="8">
              <use href={sprite + '#icon-Vector'}></use>
            </svg>
            Підвищити свої професійні якості опираючись на нові знання
          </li>
          <li className={s.text}>
            <svg className={s.vector} width="4" height="8">
              <use href={sprite + '#icon-Vector'}></use>
            </svg>
            Стати цікавим співрозмовником
          </li>
        </ul>
      
      <div className={s.buttonSection}>
        <NavLink to="/login">
          <button type="submit" className={s.buttonFirst}>
            Увійти
          </button>
        </NavLink>
        <NavLink to="/register">
          <button type="submit" className={s.buttonSecond}>
            Реєстрація
          </button>
        </NavLink>
      </div>
      </div>
    </section>,
    modalRoot
  );
}

export default ModalInfoMobile;
