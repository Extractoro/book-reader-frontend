import DatePicker from 'react-datepicker';
import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import s from '../MyTrainingPlaying/MyTrainingPlaying.module.css';
import sprite from '../../../sprites/myTrainingPlaying.svg';

function MyTrainingPlaying() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <form className={s.form}>
      <svg className={s.iconBack} width="24" height="12">
        <use href={sprite + '#icon-back'}></use>
      </svg>
      <h2 className={s.title}>Моє тренування</h2>
      <div className={s.datePicker}>
        <DatePicker
          dateFormat="dd.MM.yyyy"
          selected={startDate}
          onChange={startDate => setStartDate(startDate)}
          className={s.datePickerInput}
        />
        <DatePicker
          dateFormat="dd.MM.yyyy"
          selected={endDate}
          onChange={endDate => setEndDate(endDate)}
          className={s.datePickerInput}
        />
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
  );
}

export default MyTrainingPlaying;
