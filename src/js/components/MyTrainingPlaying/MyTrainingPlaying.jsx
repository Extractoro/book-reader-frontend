import DatePicker from 'react-datepicker';
import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import s from '../MyTrainingPlaying/MyTrainingPlaying.module.css';
import sprite from '../../../sprites/myTrainingPlaying.svg';
import { useSelector } from 'react-redux';
import { selectBooks } from 'js/redux/books/books-slice';
import { useFetchAllBooksQuery } from 'js/redux/books/booksApi';
import { Loading } from 'notiflix';

function MyTrainingPlaying() {
  const [selectedDate, setSelectedDate] = useState();
  const [endDate, setEndDate] = useState();
  const books = useSelector(selectBooks);
  // const [plannedBooks, setPlannedBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState('');
  const { isFetching } = useFetchAllBooksQuery();


  const findSelectedBook = books.find(book => book._id === selectedBook);
  console.log(findSelectedBook);

  // console.log(filteredBooks);
  // console.log(renderedBooks);

  // let startDateUnformatted = null;
  // let endDateUnformatted = null;

  // if (selectedDate !== undefined && endDate !== undefined) {
  //   startDateUnformatted = JSON.stringify(selectedDate).slice(1, 11);
  //   endDateUnformatted = JSON.stringify(endDate).slice(1, 11);
  // }

  // function formatDate(date) {
  //   var d = new Date(date),
  //     month = '' + (d.getMonth() + 1),
  //     day = '' + (d.getDate() + 1),
  //     year = d.getFullYear();

  //   if (month.length < 2) month = '0' + month;
  //   if (day.length < 2) day = '0' + day;

  //   return [year, month, day].join('.');
  // }

  // const startDateReady = formatDate(startDateUnformatted);
  // const endDateReady = formatDate(endDateUnformatted);

  return (
    <>
      <>
        {!isFetching && Loading.remove()}
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
              {books?.length > 0 && (
                <>
                  <select
                    className={s.select}
                    onChange={e => setSelectedBook(e.target.value)}
                  >
                    {books.map(({ title, _id }) => (
                      <option
                        className={s.option}
                        key={_id}
                        id={_id}
                        value={_id}
                      >
                        {title}
                      </option>
                    ))}
                  </select>
                  <button className={s.submitBtn} type="submit">
                    Додати
                  </button>
                </>
              )}
            </div>
          </form>
        </div>
      </>
      {isFetching && Loading.circle()}
    </>
  );
}

export default MyTrainingPlaying;
