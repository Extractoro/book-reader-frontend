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
          <Media
            query={'(min-width:1280px)'}
            render={() => <AddResultStat />}
          />
          {/*<Media*/}
          {/*  query={'(min-width:1280px)'}*/}
          {/*  render={()=><AddResultStat/>}/>*/}
        </GoalWrapper>

        <Wrapper>
          <MyTrainingPlaying />
        </Wrapper>
      </WorkoutContainer>
    </>
  );
};

export default Workout;
