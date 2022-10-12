import Title from '../Title';

import s from './GoalReading.module.css';
const GoalReading = ({ books, dayQuantity }) => {
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
          <p className={s['number']}>
            {dayQuantity !== undefined && dayQuantity > 0 ? dayQuantity : 0}
          </p>
          <p className={s['text']}>Кількість днів</p>
        </div>
      </div>
    </div>
  );
};

export default GoalReading;
