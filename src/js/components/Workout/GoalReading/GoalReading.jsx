import Title from '../Title';
import {GoalThumb,GoalNumberSquare,GoalNumber,GoalText} from './GoalReading.styled'

const GoalReading=()=>{
  return(

    <div>
      <Title/>
      <GoalThumb >
        <div className='goal-thumb_item'>
          <GoalNumberSquare className='goal-number-square'><GoalNumber>0</GoalNumber></GoalNumberSquare>
          <GoalText>Кількість книжок</GoalText>
        </div>
        <div className='goal-thumb_item'>
          <GoalNumberSquare className='goal-number-square'><GoalNumber>0</GoalNumber></GoalNumberSquare>
          <GoalText>Кількість днів</GoalText>
        </div>
      </GoalThumb>
    </div>
  )
}

export default GoalReading
