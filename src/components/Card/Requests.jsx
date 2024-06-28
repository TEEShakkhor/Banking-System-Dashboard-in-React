import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Requests = () => {
  const data = {
    labels: ['May 09', 'May 08', 'May 07', 'May 06', 'May 05'],
    datasets: [
      {
        label: 'Requests',
        data: [10, 5, 3, 12, 17],
        fill: false,
        borderColor: '#ff6384',
        tension: 0.4,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          stepSize: 5,
        },
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
    <div className="requests">
      <h3>Requests</h3>
      <div className="requests-chart">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default Requests;