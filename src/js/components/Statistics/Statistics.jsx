import s from './Statistics.module.css'
import React from 'react';
import { Line } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import AddBookRead from '../AddBookRead/AddBookRead';


const Statistics=()=>{
  const number = 2;
  const goal= 1

  const data = {
    labels: ["", "", "", "", "", "", ""],
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
        data: [`${goal}`, `${goal}`,`${goal}`, `${goal}`, `${goal}`,`${goal}`,`${goal}`],
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
        data: [`${number}`, `${number}`, `${number}`, `${number}`, `${number}`,`${number}`,`${number}`],
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

  return(
    <div className={s['thumb']}>
      <p className={s['value']}>Кількість сторінок/день <span>0</span></p>
      <div className={s['result']}>
        <Line options={options} data={data}  />

      </div>


    </div>

  )
}

export default Statistics

