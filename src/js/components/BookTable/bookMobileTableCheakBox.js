import React from 'react';
import s from './bookMobileTable.module.css';
import sprite from '../../../sprites/delete-icon.svg';
// import EllipsisText from "react-ellipsis-text";

export default function BookTableMobile({ library, onDelete }) {
  let filteredLibrary = library.filter(book => book !== undefined);

  return (
    <>
      <section className={s['section']}>
        {filteredLibrary?.length > 0 && (
          <ul className={s['table']}>
            {filteredLibrary.map(({ _id, title, author, year, totalPages }) => (
              <li key={_id} id={_id}>
                <div className={s['flex-book-container']}>
                  <div>
                  <input className={s['navIcon']} type='checkbox'></input>
                    <p className={s['subtitleNameBook']}>{title}</p>
                    <p className={s['subtitle']}>
                      <span className={s['topic']}>Author:</span> {author}
                    </p>
                    <p className={s['subtitle']}>
                      <span className={s['topic']}>Year:</span>
                      {year}
                    </p>
                    <p className={s['subtitle']}>
                      <span className={s['topic']}>Pages:</span>
                      {totalPages}
                    </p>
                  </div>
                  <button
                    type="button"
                    className={s['btn-book-delete']}
                    onClick={() => onDelete(_id)}
                  >
                    <svg
                      className={s['book-delete-icon']}
                      width="22"
                      height="17"
                    >
                      <use href={sprite + '#delete'} />
                    </svg>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
// BookTableMobile.propTypes = {
//   text: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   author: PropTypes.string.isRequired,
//   year: PropTypes.number.isRequired,
//   pages: PropTypes.number.isRequired,
//   rating: PropTypes.number.isRequired,
// };
