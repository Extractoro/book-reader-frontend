import Title from '../Title';

import s from './GoalReading.module.css'
const GoalReading=()=>{
  return(

    <div className={s['thumb']}>
      <Title/>
      <div className={s['goalThumb']} >
        <div>
          <p className={s['number']}>0</p>
          <p className={s['text']}>Кількість книжок</p>
        </div>
        <div>
          <p className={s['number']}>0</p>
          <p className={s['text']}>Кількість днів</p>
        </div>
      </div>
    </div>
  )
}

export default GoalReading
