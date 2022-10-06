import AddResultStat from "js/components/AddResultStat";
import GoalReading from "js/components/GoalReading";
import MyTrainingPlayingCheakBox from "js/components/MyTrainingPlayingCheakBox/MyTrainingPlayingCheakBox";
import TimerCountdown from "js/components/TimerCountdown/TimerCountdown";
import TimerYear from "js/components/TimerYear/TimerYear";
import s from '../Statistics/Statistics.module.css'

const Statistics = () => {
  return (
    <>
    <div className={s.statContainer}>
    <TimerYear/>
    <TimerCountdown/>
    </div>
    <GoalReading/>
    <MyTrainingPlayingCheakBox/>
    <AddResultStat/>
    </>
  )
};

export default Statistics;

