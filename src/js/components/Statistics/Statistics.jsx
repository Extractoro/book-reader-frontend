import s from './Statistics.module.css';
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Link } from 'react-router-dom';

// eslint-disable-next-line no-unused-vars
import Chart from 'chart.js/auto';
// eslint-disable-next-line no-unused-vars
import AddBookRead from '../AddBookRead/AddBookRead';
import Media from 'react-media';

const Statistics = ({ plannedPages, readPages }) => {
  const OneDay = 86400000;
  let labelsData = [];
  let planData = [];
  let actData = [];
  let averageAmount = 0;

  // if (readPages) {
  //   var pages = [];
  //   for (let i = 0; i < readPages.length; i++) {
  //     pages.push(`${readPages[i].pages}`);
  //   }

  //   console.log(pages);
  // }

  if (readPages) {
    readPages.forEach(({ factDate, pages }) => {
      labelsData.push(factDate);
      actData.push(pages);
    });
  }

  function toTimestamp(strDate) {
    const datum = Date.parse(strDate);
    return datum / 1000;
  }

  console.log(toTimestamp('2022-10-10'));

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
          `${plannedPages}`,
          `${plannedPages}`,
          `${plannedPages}`,
          `${plannedPages}`,
          `${plannedPages}`,
          `${plannedPages}`,
          `${plannedPages}`,
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

        data: [],
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
        Кількість сторінок/день <span>{plannedPages}</span>
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
