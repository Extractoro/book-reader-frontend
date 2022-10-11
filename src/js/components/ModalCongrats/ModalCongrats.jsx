import { createPortal } from 'react-dom';
import sprite from '../../../sprites/modalcongrats.svg';
import s from '../ModalCongrats/ModalCongrats.module.css';
import { useFetchAllWorkoutsQuery } from 'js/redux/workout/workoutApi';
import React, { useState } from 'react';

const modalRoot = document.querySelector('#modal-root');

function ModalCongrats({ isOpen, onClose }) {
  const { data: workout } = useFetchAllWorkoutsQuery(null, {
    refetchOnMountOrArgChange: true,
  });

  const [content, setContent] = useState(workout[0]);
  console.log(content);
  const onContentChanged = () => {
    setContent(null);
  };

  // if (!isOpen) return null;

  return createPortal(
    <>
      <div className={s.backdrop}>
        <div className={s.modal}>
          <svg className={s.icon} width="54" height="54">
            <use href={sprite + '#icon-thumb_up_orange'}></use>
          </svg>
          <p className={s.text}>Вітаю! Ще одна книга прочитана.</p>
          <div className={s.sectionBtn}>
            <button className={s.modalBtn} onClick={onContentChanged}>
              Готово
            </button>
          </div>
        </div>
      </div>
    </>,
    modalRoot
  );
}
export default ModalCongrats;
