import GoalReading from '../../components/GoalReading';
import AddResultStat from '../../components/AddResultStat';
import { WorkoutContainer, Wrapper, GoalWrapper } from './Workout.styled';
import GlobalCSS from '../../../GlobalCss/global.css';
import React from 'react';
import MyTrainingPlaying from '../../components/MyTrainingPlaying/MyTrainingPlaying';
import Media from 'react-media';
import { useSelector } from 'react-redux';
import { useFetchAllBooksQuery } from '../../redux/books/booksApi';
import { selectWorkout } from '../../redux/workout/workout-slice';
import bookSelectors from '../../redux/books/bookSelectors';
import { Loading } from 'notiflix';

const Workout = () => {
  // const books = useSelector(bookSelectors.getAllBooks);
  const { isFetching } = useFetchAllBooksQuery();
  const isWorkout = useSelector(selectWorkout);
  // const isFetching = useSelector(bookSelectors.getAllBooks);

  return (
    <>
      <>
        {!isFetching && Loading.remove()}
        <WorkoutContainer>
          <GlobalCSS />

          <GoalWrapper>
            <GoalReading />

            <Media
              query="(min-width:1280px)"
              render={() => <>{isWorkout && <AddResultStat />}</>}
            />
          </GoalWrapper>

          <Wrapper>{isWorkout && <MyTrainingPlaying />}</Wrapper>

          <Media
            query="(min-width:768px) and (max-width:1279px)"
            render={() => <>{isWorkout && <AddResultStat />}</>}
          />
          <Media
            query="(max-width:767px)"
            render={() => <>{isWorkout && <AddResultStat />}</>}
          />

          {/* <AddResultStat /> */}
        </WorkoutContainer>
      </>
      {isFetching && Loading.circle()}
    </>
  );
};

export default Workout;
