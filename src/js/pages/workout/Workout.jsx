import AddBook from '../../components/Workout/AddBook';
import GoalReading from '../../components/Workout/GoalReading';
import BookList from '../../components/Workout/BookList';
import Statistics from '../../components/Workout/Statistics';
import {WorkoutContainer} from './Workout.styled';

export const Workout=()=>{
  return(

    <WorkoutContainer>
      <GoalReading/>
      <BookList/>
      <Statistics/>
      <AddBook/>
    </WorkoutContainer>
  )
}
