import DatePicker from 'react-datepicker';
import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import s from '../MyTrainingPlaying/MyTrainingPlaying.module.css';
import sprite from '../../../sprites/myTrainingPlaying.svg';

function MyTrainingPlaying() {
  const [selectedDate, setSelectedDate] = useState();
  const [endDate, setEndDate] = useState();

  return (
    <div className={s['thumb']}>
      <form className={s.form}>
        <svg className={s.iconBack} width="24" height="12">
          <use href={sprite + '#icon-back'}></use>
        </svg>
        <h2 className={s.title}>Моє тренування</h2>
        <div className={s.datePicker}>
          <div className={s['datePickerWrapper']}>
            <DatePicker
              dateFormat="dd.MM.yyyy"
              selected={selectedDate}
              onChange={date => setSelectedDate(date)}
              className={s['datePickerInput']}
              disabledKeyboardNavigation
              customInput={
                <input
                  type="text"
                  placeholder="Початок"
                  className={s['customInput']}
                />
              }
              placeholderText="Початок"
              minDate={new Date()}
            />
          </div>
          <div className={s['datePickerWrapper']}>
            <DatePicker
              dateFormat="dd.MM.yyyy"
              selected={endDate}
              onChange={endDate => setEndDate(endDate)}
              className={s['datePickerInput']}
              customInput={
                <input
                  type="text"
                  placeholder="Завершення"
                  className={s['customInput']}
                />
              }
              placeholderText="Завершення"
              minDate={new Date()}
            />
          </div>
        </div>
        <div className={s.selectBtn}>
          <select className={s.select}>
            <option className={s.option} selected value="default">
              Обрати книги з бібліотеки
            </option>
          </select>
          <button className={s.submitBtn} type="submit">
            Додати
          </button>
        </div>
      </form>
    </div>
  );
}

export default MyTrainingPlaying;
