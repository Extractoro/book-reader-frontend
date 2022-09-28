
import { StatisticsThumb,StatisticsResult,StatisticsValue,AddWorkout } from './Statistics.styled';
import React from 'react';


const Statistics=()=>{
  return(
    <StatisticsThumb>
      <StatisticsValue >Кількість сторінок/день <span>0</span></StatisticsValue>
      <StatisticsResult>

      </StatisticsResult>
      <AddWorkout to='/addBook' ><span>+</span></AddWorkout>
    </StatisticsThumb>

  )
}

export default Statistics
