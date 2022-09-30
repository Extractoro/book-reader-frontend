
import { StatisticsThumb,StatisticsResult,StatisticsValue,AddWorkout } from './Statistics.styled';
import React from 'react';
import { StatisticsForm } from './StatisticsForm';


const Statistics=()=>{
  return(
    <StatisticsThumb>

      <StatisticsValue >Кількість сторінок/день <span>0</span></StatisticsValue>
      <StatisticsResult>
        <StatisticsForm/>
      </StatisticsResult>

      <AddWorkout to='/addBook' ><span>+</span></AddWorkout>
    </StatisticsThumb>

  )
}

export default Statistics
