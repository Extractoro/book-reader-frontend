import { useState, useEffect } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import BookTableCheckBox from '../BookTable/BookTableCheackBox';
import { useSelector } from 'react-redux';
import { selectBooks } from 'js/redux/books/books-slice';
import { useFetchAllBooksQuery } from 'js/redux/books/booksApi';
import { Loading } from 'notiflix';
import { useFetchAllWorkoutsQuery } from 'js/redux/workout/workoutApi';
import { selectWorkout } from 'js/redux/workout/workout-slice';
import TimerCountdown from 'js/components/TimerCountdown/TimerCountdown';
import TimerYear from 'js/components/TimerYear/TimerYear';
import s from '../../pages/Statistics/Statistics.module.css';
import StatisticsGraph from 'js/components/Statistics';
import AddResultStat from 'js/components/AddResultStat';
import { ChronoUnit, LocalDate } from 'js-joda';
import GoalReadingStatistics from '../GoalReadingStatistics';

function MyTrainingPlayingCheckBox() {
  const books = useSelector(selectBooks);
  const workout = useSelector(selectWorkout);
  const [allBooks, setAllBooks] = useState();
  const [workoutInfo, setWorkoutInfo] = useState();
  const [isChecked, setIsChecked] = useState();
  const { isFetching } = useFetchAllBooksQuery();
  const { isLoading } = useFetchAllWorkoutsQuery();
  const booksFind = [];

  useEffect(() => {
    setAllBooks(books);
    setWorkoutInfo(workout);
  }, [books, workout]);

  if (workoutInfo !== undefined) {
    let workoutDate = workoutInfo[0].finishDate;
    if (workoutDate !== undefined) {
      var endYear = workoutDate.slice(0, 4);
      var endMonth = workoutDate.slice(4, 6);
      var endDay = workoutDate.slice(6, 8);
    }
  }

  let startDateUnformatted = new Date();
  startDateUnformatted = JSON.stringify(startDateUnformatted).slice(1, 11);

  function formatDateStat(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + (d.getDate() + 1),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

  const startDateStat = formatDateStat(startDateUnformatted);
  const endDateStat = formatDateStat(`${endYear}-${endMonth}-${endDay}`);

  function getNumberOfDays(start, end) {
    const start_date = new LocalDate.parse(start);
    const end_date = new LocalDate.parse(end);

    return ChronoUnit.DAYS.between(start_date, end_date);
  }

  if (endDateStat !== 'NaN-NaN-NaN') {
    var daysStats = getNumberOfDays(startDateStat, endDateStat);
  }

  if (allBooks !== undefined || workoutInfo !== undefined) {
    for (let i = 0; i < allBooks.length; i++) {
      const el = allBooks[i]._id;
      for (let j = 0; j < workoutInfo[0].books.length; j++) {
        const element = workoutInfo[0].books[j];

        if (el === element) {
          booksFind.push(allBooks[i]);
        }
      }
    }
  }

  // const checkedBook = booksFind.find(book => book._id === isChecked);
  // console.log(checkedBook);

  return (
    <>
      {!isLoading && Loading.remove()}
      {!isFetching && Loading.remove()}

      <div className={s.statContainer}>
        <div className={s.timerContainer}>
          <TimerYear />
          <TimerCountdown />
        </div>
        <GoalReadingStatistics
          books={booksFind}
          dayQuantity={daysStats}
          // leftBooks={leftBooks}
        />
      </div>
      <BookTableCheckBox library={booksFind} setIsChecked={setIsChecked} />
      <div className={s.statFlexContainer}>
        <StatisticsGraph />
        <AddResultStat />
      </div>

      {isFetching && Loading.circle()}
      {isLoading && Loading.circle()}
    </>
  );
}

export default MyTrainingPlayingCheckBox;
