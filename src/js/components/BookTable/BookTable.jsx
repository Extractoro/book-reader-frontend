import Media from 'react-media';
import s from './bookTable.module.css';
import Table from './Table';

import React from 'react';
import BookTableMobile from './bookMobileTable';

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
              <BookTableMobile library={library} onDelete={onDelete} />
            )}
            {matches.medium && <Table library={library} onDelete={onDelete} />}
          </>
        )}
      </Media>
    </div>
  );
};

export default BookTable;
