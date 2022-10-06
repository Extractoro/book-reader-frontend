import Media from 'react-media';
import s from './bookTable.module.css';
import TableCheckBox from './TableCheckBox';

import React from 'react';
import BookTableMobileCheckBox from './bookMobileTableCheckBox';

const BookTable = ({ library, setIsChecked }) => {
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
                setIsChecked={setIsChecked}
                library={library}
              />
            )}
            {matches.medium && (
              <TableCheckBox setIsChecked={setIsChecked} library={library} />
            )}
          </>
        )}
      </Media>
    </div>
  );
};

export default BookTable;
