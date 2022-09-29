import React from 'react';
import PropTypes from 'prop-types';
import s from './bookMobileTable.module.css';


export default function BookTableMobile() {
  const title='Name book'
  const pages='test'
  const author='test'
  const year='test'



  return (
    <>
      <section className={s['section']}>
        <ul className={s['table']}>
          <li>
            <p className={s['subtitle']}>
              {title === 'Reading now' ? (
                <svg width={22} height={17}>
                  <use>#</use>
                </svg>
              ) : (
                <svg width={22} height={17}>
                  <use>#</use>
                </svg>
              )}
              {title}
            </p>
            <p className={s['subtitle']}><span className={s['topic']}>Author:</span> {author}</p>
            <p className={s['subtitle']}>
              <span className={s['topic']}>Year:</span>
              {year}
            </p>
            <p className={s['subtitle']}>
              <span className={s['topic']}>Pages:</span>
              {pages}
            </p>
          </li>
        </ul>
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
