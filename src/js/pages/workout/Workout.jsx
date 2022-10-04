import GoalReading from '../../components/GoalReading';
import AddResultStat from '../../components/AddResultStat';
import BookList from '../../components/BookTable';
import Statistics from '../../components/Statistics';
import { WorkoutContainer, Wrapper, GoalWrapper } from './Workout.styled';
import GlobalCSS from '../../../GlobalCss/global.css';
import React from 'react';
import AddBookRead from '../../components/AddBookRead/AddBookRead';
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
            render={()=><AddResultStat/>}/>
          {/*<Media*/}
          {/*  query={'(min-width:1280px)'}*/}
          {/*  render={()=><AddResultStat/>}/>*/}
        </GoalWrapper>

        <Wrapper>
          <Media
            query="(min-width:768px) and (max-width:2100px)"
            render={() => <MyTrainingPlaying />}
          />
          <BookList />
          <AddBookRead></AddBookRead>
          <Statistics />
          <Media
          query={'(min-width:768px) and (max-width:1280px)'}
          render={()=><AddResultStat/>}/>
          <Media
            query={'(max-width:767px)'}
            render={()=><AddResultStat/>}/>
        </Wrapper>

      </WorkoutContainer>
    </>
  );
};

export default Workout;
