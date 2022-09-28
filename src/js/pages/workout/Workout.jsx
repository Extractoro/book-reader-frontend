
import GoalReading from '../../components/Workout/GoalReading';
import BookList from '../../components/Workout/BookList';
import Statistics from '../../components/Workout/Statistics';
import {WorkoutContainer} from './Workout.styled';
import GlobalCSS from '../../../GlobalCss/global.css';
import React from 'react';
// import Table from '../../components/Workout/BookList/Table'



export const Workout=()=>{
  return(

    <WorkoutContainer>
      <GlobalCSS/>
      <GoalReading/>
      <BookList/>
      <Statistics/>

    </WorkoutContainer>
  )
}
