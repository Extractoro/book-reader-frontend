import GoalReading from '../../components/GoalReading';
import AddResultStat from '../../components/AddResultStat';
import { WorkoutContainer, Wrapper, GoalWrapper } from './Workout.styled';
import GlobalCSS from '../../../GlobalCss/global.css';
import React from 'react';
import MyTrainingPlaying from '../../components/MyTrainingPlaying/MyTrainingPlaying';

const Workout = () => {
  return (
    <>
      <WorkoutContainer>
        <GlobalCSS />
        <GoalWrapper>
          <GoalReading />
        </GoalWrapper>

        <Wrapper>
          <MyTrainingPlaying />
        </Wrapper>
        <AddResultStat />
      </WorkoutContainer>
    </>
  );
};

export default Workout;
