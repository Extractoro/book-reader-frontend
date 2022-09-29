import AddBook from '../../components/Workout/AddBook';
import GoalReading from '../../components/Workout/GoalReading';
import BookList from '../../components/Workout/BookList';
import Statistics from '../../components/Workout/Statistics';
import { WorkoutContainer } from './Workout.styled';
import GlobalCSS from '../../../GlobalCss/global.css';
import React from 'react';
import { AddWorkout } from '../../components/Workout/Statistics/Statistics.styled';

const Workout = () => {
  return (
    <WorkoutContainer>
      <GlobalCSS />
      <GoalReading />
      <BookList />
      <Statistics />
    </WorkoutContainer>
  );
};

export default Workout;
