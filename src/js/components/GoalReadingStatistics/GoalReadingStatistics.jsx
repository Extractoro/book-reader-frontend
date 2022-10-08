import Title from '../Title';

import s from './GoalReadingStatistics.module.css';
const GoalReading = ({ books, dayQuantity, leftBooks }) => {
  return (
    <div className={s['thumb']}>
      <Title />
      <div className={s['goalThumb']}>
        <div className={s['wrapper']}>
          <p className={s['number']}>
            {books !== undefined && books.length > 0 ? books.length : 0}
          </p>
          <p className={s['text']}>Кількість книжок</p>
        </div>
        <div className={s['wrapper']}>
          <p className={s['number']}>{dayQuantity}</p>
          <p className={s['text']}>Кількість днів</p>
        </div>
        <div className={s['wrapper']}>
          <p className={s['number-book']}>{books.length - leftBooks.length}</p>
          <p className={s['text']}>Залишилось книжок</p>
        </div>
      </div>
    </div>
  );
};

export default GoalReading;
