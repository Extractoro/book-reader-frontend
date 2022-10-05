import GoalReading from '../../components/GoalReading';
import AddResultStat from '../../components/AddResultStat';
import { WorkoutContainer, Wrapper, GoalWrapper } from './Workout.styled';
import GlobalCSS from '../../../GlobalCss/global.css';
import React from 'react';
import MyTrainingPlaying from '../../components/MyTrainingPlaying/MyTrainingPlaying';
import Media from 'react-media';

const Workout = () => {
  return (
    <>
      <WorkoutContainer>
        <GlobalCSS />

        <GoalWrapper>
          <GoalReading />


          <Media query='(min-width:1280px)' render={()=>(
            <AddResultStat />
          )}/>

        </GoalWrapper>

        <Wrapper>
          <MyTrainingPlaying />

        </Wrapper>

        <Media query='(min-width:768px) and (max-width:1279px)' render={()=>(
          <AddResultStat />
        )}/>
        <Media query='(max-width:767px)' render={()=>(
          <AddResultStat />
        )}/>

        {/*<AddResultStat />*/}

      </WorkoutContainer>
    </>
  );
};

export default Workout;
