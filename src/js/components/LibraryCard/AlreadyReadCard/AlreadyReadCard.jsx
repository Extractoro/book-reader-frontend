import { useState } from 'react';
import MediaQuery from 'react-responsive';

import s from '../AlreadyReadCard/AlreadyReadCard.module.scss';


// import Modal from '../Modal/Modal';
import Stars from '../Stars/Stars';
import { AlreadyReadIcon } from './AlreadyReadIcon';
import BooksInfo from '../BooksInfo/BooksInfo';

import ModalResume from '../../ModalResume/ModalResume'

const AlreadyReadCard = book => {
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal({
      open: true,
    });
  };
  const closeModal = () => {
    setModal({
      open: false,
    });
  };

  const updatedBookTitle =
    book.title.length <= 15 ? book.title : book.title.slice(0, 14) + '...';

  const updatedBookAuthor =
    book.author.length <= 15 ? book.author : book.author.slice(0, 14) + '...';

  return (
    <li className={s.card}>
      <div className={s.iconTitle}>
        <div className={s.navIcon}>
          <AlreadyReadIcon />
        </div>
        <p className={s.bookTitle}>{updatedBookTitle}</p>
      </div>
      <MediaQuery maxWidth={767}>
        <div className={s.bookInfoWrapper}>
          <BooksInfo status={'done'} />
          <MediaQuery maxWidth={767}>
            <div className={s.bookMoreInfo}>
              <p
                className={
                  book.author.length > 30 ? s.bookMoreInfoAuthor : s.titleText
                }
              >
                {book.author}
              </p>
              <p className={s.bookMoreInfoYear}>{book.year}</p>
              <p className={s.bookMoreInfoPage}>{book.pages}</p>
              <div className={s.bookMoreInfoPage}>
                {book.rating ? (
                  <div className={s.marginStar}>
                    <Stars backRate={book.rating} />
                  </div>
                ) : (
                  <div className={s.marginStar}>
                    <Stars />
                  </div>
                )}
              </div>
            </div>
          </MediaQuery>
        </div>
      </MediaQuery>
      <MediaQuery minWidth={768}>
        <MediaQuery minWidth={768} maxWidth={1279}>
          <p className={updatedBookAuthor ? s.bookMoreInfoAuthor : s.titleText}>
            {updatedBookAuthor}
          </p>
        </MediaQuery>
        <MediaQuery minWidth={1280}>
          <p className={updatedBookAuthor ? s.bookMoreInfoAuthor : s.titleText}>
            {book.author}
          </p>
        </MediaQuery>
        <p className={s.bookMoreInfoYear}>{book.year}</p>
        <p className={s.bookMoreInfoPage}>{book.pages}</p>
        {book.rating ? (
          <div className={s.marginStar}>
            <Stars backRate={book.rating} />
          </div>
        ) : (
          <div className={s.marginStar}>
            <Stars />
          </div>
        )}
      </MediaQuery>
      <button className={s.button} onClick={() => openModal()}>
        <span className={s.buttonText}>Резюме</span>
      </button>
      {modal.open && <ModalResume type="exit" closeModal={closeModal} />}
    </li>
  );
};

export default AlreadyReadCard;
