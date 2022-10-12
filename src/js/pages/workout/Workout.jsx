import { WorkoutContainer, Wrapper } from './Workout.styled';
import GlobalCSS from '../../../GlobalCss/global.css';
import React from 'react';
import MyTrainingPlaying from '../../components/MyTrainingPlaying/MyTrainingPlaying';
import { useSelector, useDispatch } from 'react-redux';
import {
  // selectProgress,
  selectWorkout,
  onClearWorkout,
} from '../../redux/workout/workout-slice';
import { Loading } from 'notiflix';
import { useState, useEffect } from 'react';
import { useFetchAllWorkoutsQuery } from 'js/redux/workout/workoutApi';
import Statistics from '../Statistics';
import ModalCongrats from '../../components/ModalCongrats/ModalCongrats';

const Workout = () => {
  const dispatch = useDispatch();

  // const [isOpen, setIsOpen] = useState(false);

  const { isFetching, error } = useFetchAllWorkoutsQuery(null, {
    refetchOnMountOrArgChange: true,
  });
  const isWorkout = useSelector(selectWorkout);
  // const inProgress = useSelector(selectProgress);

  // const handleClose = () => {
  //   // dispatch(onClearWorkout());
  //   setIsOpen(false);
  // };

  useEffect(() => {
    if (error?.status === 400) {
      dispatch(onClearWorkout());
    }
  });

  // useEffect(() => {
  //   if (isWorkout && !isWorkout[0]?.inProgress) {
  //     setIsOpen(true);
  //   }
  // }, [isWorkout]);

  return (
    <>
      <>
        {!isFetching && Loading.remove()}
        <WorkoutContainer>
          <GlobalCSS />

          <Wrapper>
            {/* {isOpen && <ModalCongrats onClose={handleClose} />} */}
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
