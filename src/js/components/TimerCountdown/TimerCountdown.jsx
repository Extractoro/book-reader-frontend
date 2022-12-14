import { useEffect, useRef, useState } from 'react';
import s from '../TimerCountdown/TimerCountdown.module.css';

const TimerCountdown = ({ endDateStat }) => {
  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSecond, setTimerSecond] = useState('00');

  let interval = useRef();

  const startTimer = endDate => {
    if (endDate) {
      var countdownDate = new Date(endDate).getTime();
    }

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSecond(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer(endDateStat);
    return () => {
      clearInterval(interval);
    };
  });
  return (
    <section className={s.timerSection}>
      <div>
        <p className={s.title}>До досягнення мети залишилось</p>
      </div>
      <div className={s.timer}>
        <div className={s.data}>
          <div className={s.count}>{timerDays ? timerDays : null}</div>
          <p className={s.name}>дн</p>
        </div>
        <span className={s.dots}>:</span>
        <div className={s.data}>
          <div className={s.count}>{timerHours ? timerHours : null}</div>
          <p className={s.name}>год</p>
        </div>
        <span className={s.dots}>:</span>
        <div className={s.data}>
          <div className={s.count}>{timerMinutes ? timerMinutes : null}</div>
          <p className={s.name}>хв</p>
        </div>
        <span className={s.dots}>:</span>
        <div className={s.second}>
          <div className={s.count}>{timerSecond ? timerSecond : null}</div>
          <p className={s.name}>сек</p>
        </div>
      </div>
    </section>
  );
};
export default TimerCountdown;
