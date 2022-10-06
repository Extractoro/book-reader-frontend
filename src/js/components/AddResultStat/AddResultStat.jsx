import s from './AddResultStat.module.css';
import DatePicker from 'react-datepicker';
import React, { useState, useEffect } from 'react';
import {
  useFetchAllWorkoutsQuery,
  useUpdateWorkoutMutation,
} from '../../redux/workout/workoutApi';
import { selectWorkout } from '../../redux/workout/workout-slice';
import { useSelector } from 'react-redux';
import { Loading } from 'notiflix';

function AddResultStat() {
  const [selectedDate, setSelectedDate] = useState();
  const [page, setPage] = useState('');
  const workout = useSelector(selectWorkout);
  const [result, setResult] = useState('');

  // const { isFetching } = useFetchAllWorkoutsQuery();
  const [updateResult] = useUpdateWorkoutMutation();

  useEffect(() => {
    setResult(workout);
  }, [workout]);


  const handleChange = e => {
    const { selected, value } = e.target;
    selected === 'name' ? setSelectedDate(value) : setPage(value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    await updateResult({ selectedDate, page }).then(data => console.log(data));
    reset();
  };

  const reset = () => {
    setSelectedDate('');
    setPage('');
  };

  return (
    <>
      {' '}
      <>
        {/* {!isFetching && Loading.remove()} */}
        <div className={s['thumb']}>
          <h2 className={s['stepsTitle']}>Результати</h2>

          <div className={s['result-wrapper']}>
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
                      className={s['date-input-svg']}
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
              }
              minDate={new Date()}
            />
          </label>
          <label className={s['label']}>
            <p className={s['dateTitle']}> Кількість сторінок</p>
            <input

              className={s['date-input']}
              type='number'
              name='number'
              value={page}
              onChange={handleChange}
            />
          </label>
        </form>
        <button className={s['add-result']}
                type='button'
                onClick={handleSubmit}>
          {' '}

          Додати результат
        </button>
      </div>

      < div className={s['stat-wrapper']}>
        <div className={s['line-container']}>
          <div className={s['line-right']}></div>
          <h3 className={s['statTitle']}>Статистика</h3>
          <div className={s['line-left']}></div>
        </div>

        <ul className={s['stat-list']}>
          <li className={s['stat-info']}>
            <p className={s['date']}>10.10.2019  </p>
            <p className={s['hour']}>08.10.23</p>
            <p className={s['date']}>32<span className={s['page']}>стор.</span>
            </p>
          </li>
        </ul>
      </div>
    </div>

  );
}

export default AddResultStat;
