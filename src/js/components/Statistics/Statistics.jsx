import s from './Statistics.module.css';
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import { useFetchAllWorkoutsQuery } from '../../redux/workout/workoutApi';
import { useSelector } from 'react-redux';
import { selectWorkout } from '../../redux/workout/workout-slice';
// eslint-disable-next-line no-unused-vars
import Chart from 'chart.js/auto';
// eslint-disable-next-line no-unused-vars
import AddBookRead from '../AddBookRead/AddBookRead';
import Media from 'react-media';

const Statistics = () => {
  const { data: factPages } = useFetchAllWorkoutsQuery();
  // const workout = useSelector(selectWorkout);
  const number = factPages;
  const goal = factPages;

  const data = {
    labels: ['', '', '', '', '', '', ''],
    datasets: [
      {
        label: 'Plan',
        fill: false,
        lineTension: 0.3,
        borderColor: '#091e3f',
        pointBackgroundColor: '#091e3f',
        pointHoverRadius: 5,
        pointRadius: 7,
        PointHitRadius: 7,

        data: [
          `${goal}`,
          `${goal}`,
          `${goal}`,
          `${goal}`,
          `${goal}`,
          `${goal}`,
          `${goal}`,
        ],
      },
      {
        label: 'Fact',
        fill: false,

        lineTension: 0.3,
        borderColor: '#ff6b08',
        pointBackgroundColor: '#ff6b08',
        pointHoverRadius: 5,
        pointRadius: 7,
        PointHitRadius: 7,

        data: [
          `${number}`,
          `${number}`,
          `${number}`,
          `${number}`,
          `${number}`,
          `${number}`,
          `${number}`,
        ],
      },
    ],
  };

  const options = {
    scales: {
      yAxis: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className={s['thumb']}>
      <p className={s['value']}>
        Кількість сторінок/день <span>0</span>
      </p>
      <div className={s['result']}>
        <Line options={options} data={data} />
      </div>

      <Media queries={{ medium: '(max-width: 767px)' }}>
        {matches => (
          <>
            {matches.medium && (
              <div className={s['thumbBtn']}>
                <Link className={s['btnAddMyTraining']}>+</Link>
              </div>
            )}
          </>
        )}
      </Media>
    </div>
  );
};

export default Statistics;
