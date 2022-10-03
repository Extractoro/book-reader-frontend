import s from './PlanToReadCard.module.scss';

import BooksInfo from '../BooksInfo/BooksInfo';
import { FirstBook } from './FirstBook';
import { OrangeBook } from './OrangeBook';

const planToReadCard = book => {
  return (
    <li className={s.card}>
      <div className={s.iconTitle}>
        <div className={s.navIcon}>
          {book.status === 'read' ? <OrangeBook /> : <FirstBook />}
        </div>
        <p className={s.bookTitle}>{book.title}</p>
      </div>
      <div className={s.bookInfoWrapper}>
        <BooksInfo />
        <div className={s.bookMoreInfo}>
          <p
            className={
              book.author.length > 30 ? s.bookMoreInfoAuthor : s.authorText
            }
          >
            {book.author}
          </p>
          <p className={s.bookMoreInfoYear}>{book.year}</p>
          <p className={s.bookMoreInfoPage}>{book.pages}</p>
        </div>
      </div>
    </li>
  );
};

export default planToReadCard;
