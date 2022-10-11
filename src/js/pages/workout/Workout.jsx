import { WorkoutContainer, Wrapper } from './Workout.styled';
import GlobalCSS from '../../../GlobalCss/global.css';
import React from 'react';
import MyTrainingPlaying from '../../components/MyTrainingPlaying/MyTrainingPlaying';
import { useSelector } from 'react-redux';
import {
  selectProgress,
  selectWorkout,
} from '../../redux/workout/workout-slice';
import { Loading } from 'notiflix';
import { useFetchAllWorkoutsQuery } from 'js/redux/workout/workoutApi';
import Statistics from '../Statistics';

const Workout = () => {
  const { isFetching } = useFetchAllWorkoutsQuery(null, {
    refetchOnMountOrArgChange: true,
  });
  const isWorkout = useSelector(selectWorkout);
  // const inProgress = useSelector(selectProgress);

  return (
    <>
      <>
        {!isFetching && Loading.remove()}
        <WorkoutContainer>
          <GlobalCSS />

          <Wrapper>
            {!isWorkout && <MyTrainingPlaying />}
            {isWorkout && <Statistics />}
          </Wrapper>

          {/* <AddResultStat /> */}
        </WorkoutContainer>
      </>
      {isFetching && Loading.circle()}
    </>
  );
};

export default Workout;
