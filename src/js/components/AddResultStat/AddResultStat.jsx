import s from './AddResultStat.module.css';
import DatePicker from 'react-datepicker';
import React, { useState } from 'react';
import { TextField } from '@mui/material';

function AddResultStat() {
  const [selectedDate, setSelectedDate] = useState('');
  const [page, setPage] = useState('');

  // const handleInputChanged = event => {
  //   const { selected, value } = event.currentTarget;
  //   switch (selected) {
  //     case 'date':
  //       setSelectedDate(value);
  //       break;
  //     case 'page':
  //       setPage(value);
  //       break;
  //     default:
  //       return;
  //   }
  // };
  const handleChange = e => {
    const { name, value } = e.target;
    name === 'name' ? setSelectedDate(value) : setPage(value);
  };

    const handleSubmit = async event => {
      event.preventDefault();
      reset();
    };

    const reset = () => {
      setSelectedDate('');
      setPage('');
    };

  return (
    <div className={s['thumb']}>
      <h2 className={s['stepsTitle']}>Результати</h2>
      <form className={s['stat-form']}>
        <label className={s['label']}>
          <p className={s['dateTitle']}> Дата</p>
          <DatePicker
            dateFormat="dd.MM.yyyy"
            selected={selectedDate}
            onChange={date => setSelectedDate(date)}
            className={s['datePickerInput']}
            disabledKeyboardNavigation
            customInput={
              <input
                type="text"
                name="date"
                value={selectedDate}
                className={s['date-input']}
                onChange={handleChange}
              />
            }
            minDate={new Date()}
          />
        </label>
        <label className={s['label']}>
          <p className={s['dateTitle']}> Кількість сторінок</p>
          <input
            className={s['date-input']}
            type="number"
            name="number"
            value={page}
            onChange={handleChange}
          />
        </label>
      </form>
      <button className={s['add-result']} type="button" onClick={handleSubmit}>
        Додати результат
      </button>
      <div>
        <h3 className={s['statTitle']}>Статистика</h3>
        <ul className={s['stat-list']}>
          <li className={s['stat-info']}>
            <p className={s['date']}>10.10.2019</p>
            <p className={s['hour']}>08.10.23</p>
            <p className={s['date']}>32
              <span className={s['page']}>стор.</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AddResultStat;





