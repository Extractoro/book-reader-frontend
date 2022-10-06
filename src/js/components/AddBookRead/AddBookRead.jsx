import s from './AddBookRead.module.css';
import Media from 'react-media';
import { useCreateWorkoutMutation } from 'js/redux/workout/workoutApi';
import { Notify } from 'notiflix';

const AddBookRead = ({
  setSelectedDate,
  setEndDate,
  setPlannedBooks,
  library,
  startDateReady,
  endDateReady,
}) => {
  const [createTraining] = useCreateWorkoutMutation();
  let filteredLibrary = library.filter(book => book !== undefined);

  let booksIds = [];
  filteredLibrary.map(({ _id }) => booksIds.push(_id));

  const handleClick = () => {
    if (
      Number(endDateReady.slice(0, 4)) < Number(startDateReady.slice(0, 4)) ||
      Number(endDateReady.slice(6, 7)) < Number(startDateReady.slice(6, 7)) ||
      Number(endDateReady.slice(8, 10)) < Number(startDateReady.slice(8, 10))
    ) {
      Notify.failure('Uncorrect date!');
      return;
    }
    Notify.success('Trainings is starting!');

    createTraining({
      startDate: startDateReady,
      finishDate: endDateReady,
      books: booksIds,
    });

    setPlannedBooks([]);
    setSelectedDate();
    setEndDate();
  };

  return (
    <>
      {filteredLibrary.length > 0 &&
        startDateReady !== '1970.01.02' &&
        endDateReady !== '1970.01.02' && (
          <div className={s['thumbBtn']}>
            <button className={s['thumb']} onClick={handleClick}>
              <p>Почати тренування</p>
            </button>
          </div>
        )}
    </>
  );
};

export default AddBookRead;
