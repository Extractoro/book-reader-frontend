import s from './Statistics.module.css';
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Link } from 'react-router-dom';

// eslint-disable-next-line no-unused-vars
import Chart from 'chart.js/auto';
// eslint-disable-next-line no-unused-vars
import AddBookRead from '../AddBookRead/AddBookRead';
import Media from 'react-media';

const Statistics = ({ workoutsInfo, readPages }) => {
  let labelsData = [];
  let planData = [];
  let actData = [];
  let averageAmount = workoutsInfo?.plannedPages;

  readPages?.forEach(({ factDate, pages }) => {
    labelsData.push(factDate);
    actData.push(pages);
  });

  for (let i = 0; i < labelsData.length; i += 1) {
    planData.push(averageAmount);
  }

  if (!labelsData.length) {
    labelsData = ['time'];
  }
  if (!planData.length) {
    planData = [0];
  }
  if (!actData.length) {
    actData = [-1];
  }

  const data = {
    labels: labelsData,
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

        data: planData,
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

        data: actData,
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
        Кількість сторінок/день <span>{averageAmount}</span>
      </p>
      <div className={s['result']}>
        <Line options={options} data={data} />
      </div>
    </div>
  );
};

export default Statistics;
