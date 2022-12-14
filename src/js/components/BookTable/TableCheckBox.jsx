import React from 'react';
import Media from 'react-media';
import s from './Table.module.css';
import sprite from '../../../sprites/checkbox.svg';
import st from './TableItem.module.css';

function Table({ library, doneBooks }) {
  let filteredLibrary = library.filter(book => book !== undefined);

  return (
    <>
      {filteredLibrary.length > 0 && (
        <Media
          query="(min-width: 768px)"
          render={() => (
            <div className={s.bookColumns}>
              <p className={s.title}>Назва</p>
              <p className={s.author}>Автор</p>
              <p className={s.year}>Рік</p>
              <p className={s.page}>Стор.</p>
            </div>
          )}
        />
      )}

      <ul className={filteredLibrary.length > 3 ? s.list_more : s.list}>
        {filteredLibrary.length > 0 &&
          filteredLibrary.map(
            ({ _id: id, title, author, year, totalPages }) => (
              <li className={st.card} key={id} id={id}>
                <div className={st.iconTitle}>
                  <svg className={st['checkbox']} width="15" height="15">
                    {doneBooks.find(({ _id }) => _id === id) ? (
                      <use href={sprite + '#done-checkbox'} />
                    ) : (
                      <use href={sprite + '#checkbox'} />
                    )}
                  </svg>
                  <p className={st.bookTitle}>{title}</p>
                </div>
                <div className={st.bookInfoWrapper}>
                  <div className={st.bookMoreInfo}>
                    <p
                      className={
                        author.length > 30
                          ? st.bookMoreInfoAuthor
                          : st.authorText
                      }
                    >
                      {author}
                    </p>
                    <p className={st.bookMoreInfoYear}>{year}</p>
                    <p className={st.bookMoreInfoPage}>{totalPages}</p>
                  </div>
                </div>
              </li>
            )
          )}
      </ul>
    </>
  );
}

export default Table;
