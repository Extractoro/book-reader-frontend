import { useState } from 'react';
import { createPortal } from 'react-dom';
import { FaStar } from 'react-icons/fa';
import s from '../ModalResume/ModalResume.module.css';

const modalRoot = document.querySelector('#modal-root');

const colors = {
  orange: '#FFBA5A',
  grey: '#a9a9a9',
};

function ModalResume() {
  const stars = Array(5).fill(0);
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const handleClick = value => {
    setCurrentValue(value);
  };
  const handleMouseOver = value => {
    setHoverValue(value);
  };
  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };
  return createPortal(
    <>
      <div className={s.backdrop}>
        <div className={s.modal}>
          <p className={s.name}>Обрати рейтинг книги</p>
          <div className={s.star}>
            {stars.map((_, index) => {
              return (
                <FaStar
                  key={index}
                  size={24}
                  onClick={() => handleClick(index + 1)}
                  onMouseOver={() => handleMouseOver(index + 1)}
                  onMouseLeave={handleMouseLeave}
                  color={
                    (hoverValue || currentValue) > index
                      ? colors.orange
                      : colors.grey
                  }
                  style={{
                    marginRight: 10,
                    cursor: 'pointer',
                  }}
                />
              );
            })}
          </div>
          <div className={s.label}>
            <p className={s.name}>Резюме</p>
            <textarea
              rows="10"
              className={s.textarea}
              type="text"
              placeholder="|..."
            />
          </div>
          <div className={s.sectionBtn}>
            <button className={s.modalBtn} type="submit">
              Назад
            </button>
            <button className={s.modalBtn} type="submit">
              Зберегти
            </button>
          </div>
        </div>
      </div>
    </>,
    modalRoot
  );
}

export default ModalResume;