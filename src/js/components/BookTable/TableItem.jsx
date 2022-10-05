import { FirstBook } from '../LibraryCard/PlanToReadCard/FirstBook';
import s from './TableItem.module.css';

const TableItem = book => {
  return (
    <li className={s.card}>
      <div className={s.iconTitle}>
        <div className={s.navIcon}>{<FirstBook />}</div>
        <p className={s.bookTitle}>{book.title}</p>
      </div>
      <div className={s.bookInfoWrapper}>
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

export default TableItem;
