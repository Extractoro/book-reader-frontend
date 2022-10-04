import React from 'react';
import Media from 'react-media';
import s from './Table.module.css';
import TableItem from './TableItem';

function Table({ library }) {
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

      <ul className={s.list}>
        {filteredLibrary.length > 0 &&
          filteredLibrary.map(
            ({ _id: id, title, author, year, totalPages }) => (
              <TableItem
                key={id}
                id={id}
                title={title}
                author={author}
                year={year}
                pages={totalPages}
              />
            )
          )}
      </ul>
    </>
  );
}

export default Table;
