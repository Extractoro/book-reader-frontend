
import { StatisticsThumb,StatisticsResult,StatisticsValue,AddWorkout } from './Statistics.styled';


const Statistics=()=>{
  return(
    <StatisticsThumb>
      <StatisticsValue >Кількість сторінок/день <span>0</span></StatisticsValue>
      <StatisticsResult>

      </StatisticsResult>
      <AddWorkout className='add-workout'><span>+</span></AddWorkout>
    </StatisticsThumb>
  )
}

export default Statistics
