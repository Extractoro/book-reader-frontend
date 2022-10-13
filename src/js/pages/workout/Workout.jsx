import { WorkoutContainer, Wrapper } from './Workout.styled';
import GlobalCSS from '../../../GlobalCss/global.css';
import React from 'react';
import MyTrainingPlaying from '../../components/MyTrainingPlaying/MyTrainingPlaying';
import ModalCongrats from '../../components/ModalCongrats/ModalCongrats';
import { useSelector, useDispatch } from 'react-redux';
import { selectWorkout, clearWorkout } from '../../redux/workout/workout-slice';
import reset from '../../redux/workout/workout-slice';
import { Loading } from 'notiflix';
import { useState, useEffect } from 'react';

import { useFetchAllWorkoutsQuery } from 'js/redux/workout/workoutApi';
import Statistics from '../Statistics';

const Workout = () => {
  const { isFetching } = useFetchAllWorkoutsQuery(null, {
    refetchOnMountOrArgChange: true,
  });
  const isWorkout = useSelector(selectWorkout);
  const dispatch = useDispatch();
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleClose = () => {
    dispatch(clearWorkout());
    setIsOpenModal(false);
  };

  useEffect(() => {
    if (isWorkout && !isWorkout[0]?.inProgress) {
      setIsOpenModal(true);
    }
  }, [isWorkout]);

  return (
    <>
      <>
        {!isFetching && Loading.remove()}
        <WorkoutContainer>
          <GlobalCSS />

          <Wrapper>
            {!isWorkout && <MyTrainingPlaying />}
            {isWorkout && <Statistics />}
            {isOpenModal && <ModalCongrats onClose={handleClose} />}
          </Wrapper>
        </WorkoutContainer>
      </>
      {isFetching && Loading.circle()}
    </>
  );
};

export default Workout;
