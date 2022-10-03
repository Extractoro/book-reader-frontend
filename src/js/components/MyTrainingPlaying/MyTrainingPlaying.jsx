import DatePicker from 'react-datepicker';
import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import s from '../MyTrainingPlaying/MyTrainingPlaying.module.css';
import sprite from '../../../sprites/myTrainingPlaying.svg';
import { useSelector } from 'react-redux';
import { selectBooks } from 'js/redux/books/books-slice';
import { useFetchAllBooksQuery } from 'js/redux/books/booksApi';
import { Loading } from 'notiflix';
import MyTrainingPlayingComponent from './MyTrainingPlayingComponent/MyTrainingPlayingComponent';

function MyTrainingPlaying() {
  const [selectedDate, setSelectedDate] = useState();
  const [endDate, setEndDate] = useState();
  const books = useSelector(selectBooks);
  const { isFetching } = useFetchAllBooksQuery();
  const renderedBooks = [];

  const filteredBooks = books.filter(book => book.status === 'plan');

  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleClick = id => {
    const findBook = filteredBooks.filter(book => {
      console.log(book._id);
      return book._id === id;
    });
    renderedBooks.push(findBook);
  };

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
          <form className={s.form} onSubmit={handleSubmit}>
            <svg className={s.iconBack} width="24" height="12">
              <use href={sprite + '#icon-back'}></use>
            </svg>
            <h2 className={s.title}>Моє тренування</h2>
            <div className={s.datePicker}>
              <div className={s['datePickerWrapper']}>
                <DatePicker
                  dateFormat="dd.MM.yyyy"
                  id="startDate"
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
                  minDate={selectedDate}
                />
              </div>
            </div>
            <div className={s.selectBtn}>
              <select className={s.select}>
                {filteredBooks?.length > 0 ? (
                  <MyTrainingPlayingComponent library={filteredBooks} />
                ) : (
                  <option className={s.option} value="default">
                    Обрати книги з бібліотеки
                  </option>
                )}
              </select>
              <button
                className={s.submitBtn}
                type="submit"
                onClick={() => handleClick()}
              >
                Додати
              </button>
            </div>
          </form>
        </div>
      </>
      {isFetching && Loading.circle()}
    </>
  );
}

export default MyTrainingPlaying;
