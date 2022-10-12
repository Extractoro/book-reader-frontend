import React from 'react';
import s from './bookMobileTable.module.css';
import sprite from '../../../sprites/checkbox.svg';
// import EllipsisText from "react-ellipsis-text";

export default function BookTableMobile({ library, doneBooks }) {
  let filteredLibrary = library.filter(book => book !== undefined);

  return (
    <>
      <section className={s['section']}>
        {filteredLibrary?.length > 0 && (
          <ul className={s['table']}>
            {filteredLibrary.map(
              ({ _id: id, title, author, year, totalPages }) => (
                <li key={id} id={id}>
                  <div className={s['flex-book-container']}>
                    <div className={s['flex_books']}>
                      <div>
                        <svg className={s['checkbox']} width="15" height="15">
                          {doneBooks.find(({ _id }) => _id === id) ? (
                            <use href={sprite + '#done-checkbox'} />
                          ) : (
                            <use href={sprite + '#checkbox'} />
                          )}
                        </svg>
                      </div>

                      <div>
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
                    </div>
                  </div>
                </li>
              )
            )}
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
