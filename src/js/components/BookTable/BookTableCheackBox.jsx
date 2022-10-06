import Media from 'react-media';
import s from './bookTable.module.css';
import TableCheackBox from './TableCheackBox'

import React from 'react';
import BookTableMobileCheakBox from './bookMobileTableCheakBox';

const BookTable = ({ library, onDelete }) => {
  return (
    <div className={s['thumb']}>
      <Media
        queries={{
          small: '(max-width: 767px)',
          medium: '(min-width: 768px) and (max-width: 2100px)',
        }}
      >
        {matches => (
          <>
            {matches.small && (
              <BookTableMobileCheakBox library={library} onDelete={onDelete} />
            )}
            {matches.medium && <TableCheackBox library={library} onDelete={onDelete} />}
          </>
        )}
      </Media>
    </div>
  );
};

export default BookTable;
