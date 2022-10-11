import s from './AddBookRead.module.css';
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
    Notify.success('Trainings is starting!');

    try {
      createTraining({
        startDate: startDateReady,
        finishDate: endDateReady,
        books: booksIds,
      });

      setPlannedBooks([]);
      setSelectedDate();
      setEndDate();
    } catch (error) {
      Notify.warning(`${error.data.message}`);
      setPlannedBooks([]);
      setSelectedDate();
      setEndDate();
    }
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
