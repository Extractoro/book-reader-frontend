import { useState, useEffect } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import Statistics from '../Statistics';
import BookTable from '../../components/BookTable';
import TrainingForm from '../TrainingForm/TrainingForm';
import AddBookRead from '../AddBookRead/AddBookRead';
import { useSelector } from 'react-redux';
import s from './MyTrainingPlaying.module.css';
import { selectBooks } from 'js/redux/books/books-slice';
import { useFetchAllBooksQuery } from 'js/redux/books/booksApi';
import { Loading } from 'notiflix';
import GoalReading from '../GoalReading';
import { ChronoUnit, LocalDate } from 'js-joda';

function MyTrainingPlaying() {
  const [selectedDate, setSelectedDate] = useState();
  const [endDate, setEndDate] = useState();
  const books = useSelector(selectBooks);
  const [plannedBooks, setPlannedBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState();
  const [selectedBook, setSelectedBook] = useState('');
  const { isFetching } = useFetchAllBooksQuery();

  useEffect(() => {
    setFilteredBooks(
      books.filter(book => {
        return book.status === 'plan';
      })
    );
  }, [books]);

  const findSelectedBookById = books.find(book => book._id === selectedBook);

  const handleClick = () => {
    setPlannedBooks([...plannedBooks, findSelectedBookById]);

    setFilteredBooks(
      filteredBooks.filter(book => {
        return book._id !== selectedBook;
      })
    );

    setSelectedBook('');
  };

  const onDelete = bookId => {
    const backedBook = plannedBooks.filter(book => {
      let backBook = null;
      if (book !== undefined && bookId !== undefined) {
        backBook = book._id === bookId;
      }

      return backBook;
    });

    setFilteredBooks([...filteredBooks, ...backedBook]);

    setPlannedBooks(plannedBooks =>
      plannedBooks.filter(book => {
        let removeBook = null;
        if (book !== undefined) {
          removeBook = book._id !== bookId;
        }
        return removeBook;
      })
    );
  };

  let startDateUnformatted = null;
  let endDateUnformatted = null;

  if (selectedDate !== undefined && endDate !== undefined) {
    startDateUnformatted = JSON.stringify(selectedDate).slice(1, 11);
    endDateUnformatted = JSON.stringify(endDate).slice(1, 11);
  }

  function formatDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + (d.getDate() + 1),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('.');
  }

  function formatDateStat(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + (d.getDate() + 1),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

  const startDateReady = formatDate(startDateUnformatted);
  const endDateReady = formatDate(endDateUnformatted);

  const startDateStat = formatDateStat(startDateUnformatted);
  const endDateStat = formatDateStat(endDateUnformatted);

  function getNumberOfDays(start, end) {
    const start_date = new LocalDate.parse(start);
    const end_date = new LocalDate.parse(end);

    return ChronoUnit.DAYS.between(start_date, end_date);
  }

  const daysStats = getNumberOfDays(startDateStat, endDateStat);

  return (
    <>
      {!isFetching && Loading.remove()}
      <div className={s['trainings-container']}>
        <div className={s['flex-training-container']}>
          <GoalReading books={plannedBooks} dayQuantity={daysStats} />
          <TrainingForm
            setSelectedBook={setSelectedBook}
            handleClick={handleClick}
            filteredBooks={filteredBooks}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            endDate={endDate}
            setEndDate={setEndDate}
          />
        </div>

        <div className={s['training-container']}>
          <BookTable library={plannedBooks} onDelete={onDelete} />
          <AddBookRead
            setEndDate={setEndDate}
            setSelectedDate={setSelectedDate}
            setPlannedBooks={setPlannedBooks}
            library={plannedBooks}
            startDateReady={startDateReady}
            endDateReady={endDateReady}
          />
          <Statistics />
        </div>
      </div>

      {isFetching && Loading.circle()}
    </>
  );
}

export default MyTrainingPlaying;
