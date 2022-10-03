import s from './ModalLibrary.module.css';
import { createPortal } from 'react-dom';
import sprite from '../../../sprites/library-sprite.svg';
import { useEffect } from 'react';
import React from 'react';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

function ModalLibrary({ onClose }) {
  const onKeyDown = event => {
    if (event.code === 'Escape') {
      onClose();
    }
  };

  const onBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  });
  return createPortal(
    <div className={s['backdrop']} onClick={onBackdropClick}>
      <div className={s['modal']}>
        <div className={s['wrapper']}>
          <div className={s['firstStep']}>
            <h4 className={s['stepsTitle']}>Крок 1.</h4>
            <div className={s['flex-wrapper']}>
              <div className={s['flex-cont']}>
                <svg className={s['main-icon']} width="30" height="25">
                  <use href={sprite + '#library-icon'} />
                </svg>
                <h5 className={s['stepsSuptitle']}>
                  Створіть особисту бібліотеку
                </h5>
              </div>
              <div className={s['flex-wrapper']}>
                <div className={s['flex-cont']}>
                  <svg className={s['arrow-icon']} width="30" height="25">
                    <use href={sprite + '#library-arrow'} />
                  </svg>
                  <p className={s['stepsParagrath']}>
                    Додайте до неї книжки, які маєте намір прочитати.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={s['secondStep']}>
            <h4 className={s['stepsTitle']}>Крок 2.</h4>
            <div className={s['flex-wrapper']}>
              <div className={s['flex-cont']}>
                <svg className={s['main-icon']} width="30" height="25">
                  <use href={sprite + '#library-flag'} />
                </svg>
                <h5 className={s['stepsSuptitle']}>
                  Сформуйте своє перше тренування
                </h5>
              </div>
              <div className={s['flex-wrapper']}>
                <div className={s['flex-cont']}>
                  <svg className={s['arrow-icon']} width="30" height="25">
                    <use href={sprite + '#library-arrow'} />
                  </svg>
                  <p className={s['stepsParagrath']}>
                    Визначте ціль, оберіть період, розпочинайте тренування.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button
            className={s['modal-button']}
            type="button"
            onClick={() => onClose()}
          >
            Ok
          </button>
        </div>
      </div>
    </div>,
    modalRoot
  );
}

// ModalLibrary.propTypes = {
//   onClose: PropTypes.func,
// };

export default ModalLibrary;
