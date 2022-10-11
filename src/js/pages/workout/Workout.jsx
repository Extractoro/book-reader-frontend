import { WorkoutContainer, Wrapper } from './Workout.styled';
import GlobalCSS from '../../../GlobalCss/global.css';
import React from 'react';
import MyTrainingPlaying from '../../components/MyTrainingPlaying/MyTrainingPlaying';
import ModalCongrats from '../../components/ModalCongrats/ModalCongrats';
import { useSelector, useDispatch } from 'react-redux';
import { selectWorkout } from '../../redux/workout/workout-slice';
import { Loading } from 'notiflix';
import { useState, useEffect } from 'react';

import { useFetchAllWorkoutsQuery } from 'js/redux/workout/workoutApi';
import Statistics from '../Statistics';

const Workout = () => {
  const { isFetching } = useFetchAllWorkoutsQuery(null, {
    refetchOnMountOrArgChange: true,
  });
  const isWorkout = useSelector(selectWorkout);
  console.log(isWorkout);
  const [isOpenModal, setIsOpenModal] = useState(false);

  // useEffect(() => {
  //   if (isWorkout[0]?.inProcess) {
  //     setIsOpenModal(true);
  //     console.log(isWorkout);
  //   }
  // }, [isWorkout]);

  return (
    <>
      <>
        {!isWorkout && Loading.remove()}
        <WorkoutContainer>
          <GlobalCSS />

          <Wrapper>
            {!isWorkout && <MyTrainingPlaying />}
            {isWorkout && <Statistics />}
            {isWorkout && !isWorkout[0]?.inProcess && <ModalCongrats />}
          </Wrapper>
        </WorkoutContainer>
      </>
      {isWorkout && Loading.circle()}
    </>
  );
};

export default Workout;
