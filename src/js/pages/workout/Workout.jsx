import { WorkoutContainer, Wrapper } from './Workout.styled';
import GlobalCSS from '../../../GlobalCss/global.css';
import React from 'react';
import MyTrainingPlaying from '../../components/MyTrainingPlaying/MyTrainingPlaying';
import { useSelector } from 'react-redux';
import { selectWorkout } from '../../redux/workout/workout-slice';
import { Loading } from 'notiflix';
import { useFetchAllWorkoutsQuery } from 'js/redux/workout/workoutApi';
import Statistics from '../Statistics';

const Workout = () => {
  const { isFetching } = useFetchAllWorkoutsQuery();
  const isWorkout = useSelector(selectWorkout);

  return (
    <>
      <>
        {!isFetching && Loading.remove()}
        <WorkoutContainer>
          <GlobalCSS />

          <Wrapper>
            {isWorkout.length === 0 && <MyTrainingPlaying />}
            {isWorkout.length === 1 && <Statistics />}
          </Wrapper>

          {/* <AddResultStat /> */}
        </WorkoutContainer>
      </>
      {isFetching && Loading.circle()}
    </>
  );
};

export default Workout;
