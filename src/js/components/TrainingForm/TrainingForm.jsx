import DatePicker from 'react-datepicker';
import sprite from '../../../sprites/myTrainingPlaying.svg';
import s from '../MyTrainingPlaying/MyTrainingPlaying.module.css';

const TrainingForm = ({
  selectedDate,
  setSelectedDate,
  endDate,
  setEndDate,
  setSelectedBook,
  handleClick,
  filteredBooks,
}) => {
  console.log(selectedDate);
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
              minDate={selectedDate === undefined ? new Date() : selectedDate}
            />
          </div>
        </div>
        <div className={s.selectBtn}>
          {filteredBooks?.length >= 0 && (
            <>
              <select
                defaultValue={'DEFAULT'}
                className={s.select}
                onChange={e => setSelectedBook(e.target.value)}
              >
                <option value="DEFAULT" hidden>
                  Оберіть свою книгу
                </option>
                {filteredBooks.map(({ title, _id }) => (
                  <option className={s.option} key={_id} id={_id} value={_id}>
                    {title}
                  </option>
                ))}
              </select>
              <button
                className={s.submitBtn}
                onClick={handleClick}
                type="button"
              >
                Додати
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default TrainingForm;
