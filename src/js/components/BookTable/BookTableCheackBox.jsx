import Media from 'react-media';
import s from './bookTable.module.css';
import TableCheckBox from './TableCheckBox';

import React from 'react';
import BookTableMobileCheckBox from './bookMobileTableCheckBox';

const BookTable = ({ library, doneBooks }) => {
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
              <BookTableMobileCheckBox
                doneBooks={doneBooks}
                library={library}
              />
            )}
            {matches.medium && (
              <TableCheckBox doneBooks={doneBooks} library={library} />
            )}
          </>
        )}
      </Media>
    </div>
  );
};

export default BookTable;
