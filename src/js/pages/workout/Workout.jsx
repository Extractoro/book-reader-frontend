import GoalReading from '../../components/GoalReading';
import BookList from '../../components/BookTable';
import Statistics from '../../components/Statistics';
import { WorkoutContainer } from './Workout.styled';
import GlobalCSS from '../../../GlobalCss/global.css';
import React from 'react';
import AddBookRead from '../../components/AddBookRead/AddBookRead';
// import Table from '../../components/Workout/BookTable/Table'



const Workout = () => {
  return (
    <WorkoutContainer>
      <GlobalCSS />
      <GoalReading />
      <BookList />
      <AddBookRead to='/addBook' ><span>+</span></AddBookRead>
      <Statistics />
    </WorkoutContainer>
  );
};

export default Workout;
