import Title from '../Title';
import {GoalThumb,GoalNumber,GoalText,GoalReadingBlock} from './GoalReading.styled'

const GoalReading=()=>{
  return(

    <GoalReadingBlock>
      <Title/>
      <GoalThumb >
        <div>
          <GoalNumber>0</GoalNumber>
          <GoalText>Кількість книжок</GoalText>
        </div>
        <div>
          <GoalNumber>0</GoalNumber>
          <GoalText>Кількість днів</GoalText>
        </div>
      </GoalThumb>
    </GoalReadingBlock>
  )
}

export default GoalReading
