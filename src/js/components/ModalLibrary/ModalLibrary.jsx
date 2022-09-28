import s from './ModalLibrary.module.css';
import '../../../sass/utils/_reset.scss';
import { createPortal } from 'react-dom';
import sprite from '../../../sprites/library-sprite.svg';

const modalRoot = document.querySelector('#modal-root');

function ModalLibrary() {
  return createPortal(
    <div className={s['backdrop']}>
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
          <button className={s['modal-button']} type="button">
            Ok
          </button>
        </div>
      </div>
    </div>,
    modalRoot
  );
}

export default ModalLibrary;
