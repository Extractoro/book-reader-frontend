import { useState, useEffect } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import Statistics from '../Statistics';
import BookTableCheackBox from '../BookTable/BookTableCheackBox';
import TrainingForm from '../TrainingForm/TrainingForm';
import AddBookRead from '../AddBookRead/AddBookRead';
import { useSelector } from 'react-redux';
import { selectBooks } from 'js/redux/books/books-slice';
import { useFetchAllBooksQuery } from 'js/redux/books/booksApi';
import { Loading } from 'notiflix';

function MyTrainingPlayingCheakBox() {
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

      // console.log('backBook', backBook);
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

  // console.log('plannedBooks', plannedBooks);
  // console.log('filteredBooks', filteredBooks);

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

  const startDateReady = formatDate(startDateUnformatted);
  const endDateReady = formatDate(endDateUnformatted);

  console.log('startDateReady', startDateReady);
  console.log('endDateReady', endDateReady);

  return (
    <>
      {!isFetching && Loading.remove()}
      <TrainingForm
        setSelectedBook={setSelectedBook}
        handleClick={handleClick}
        filteredBooks={filteredBooks}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        endDate={endDate}
        setEndDate={setEndDate}
      />

      <BookTableCheackBox library={plannedBooks} onDelete={onDelete} />
      <AddBookRead
        setEndDate={setEndDate}
        setSelectedDate={setSelectedDate}
        setPlannedBooks={setPlannedBooks}
        library={plannedBooks}
        startDateReady={startDateReady}
        endDateReady={endDateReady}
      />
      <Statistics />
      {isFetching && Loading.circle()}
    </>
  );
}

export default MyTrainingPlayingCheakBox;
