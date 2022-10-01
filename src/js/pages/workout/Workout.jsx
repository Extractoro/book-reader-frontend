import GoalReading from '../../components/GoalReading';
import BookList from '../../components/BookTable';
import Statistics from '../../components/Statistics';
import { WorkoutContainer,Wrapper,GoalWrapper } from './Workout.styled';
import GlobalCSS from '../../../GlobalCss/global.css';
import React from 'react';
import AddBookRead from '../../components/AddBookRead/AddBookRead';
import MyTrainingPlaying from '../../components/MyTrainingPlaying/MyTrainingPlaying';
import Media from 'react-media';


const Workout = () => {
  return (
    <WorkoutContainer>
      <GlobalCSS />
      <GoalWrapper>
        <GoalReading />
      </GoalWrapper>

      <Wrapper >
        <Media query='(min-width:768px) and (max-width:2100px)' render={()=>(
          <MyTrainingPlaying/>
        )}/>
        <BookList />
        <AddBookRead to='/addBook'></AddBookRead>
        <Statistics />
      </Wrapper>
    </WorkoutContainer>
  );
};

export default Workout;
