import Media from 'react-media';
import s from './bookTable.module.css';
import Table from './Table';

import React from 'react';
import BookTableMobile from './bookMobileTable';

const BookTable = () => {
  return (
    <div className={s['thumb']}>
      <Media queries={{
        small: '(max-width: 767px)',
        medium: '(min-width: 768px) and (max-width: 2100px)',
      }}>
        {matches => (
          <>
            {matches.small && <BookTableMobile />}
            {matches.medium && <Table/>}

          </>
        )}
      </Media>
    </div>
  );
};

export default BookTable;
