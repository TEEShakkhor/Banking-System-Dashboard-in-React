import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import './Requests.css';

const data = [
  { date: 'May 05', value: 2 },
  { date: 'May 06', value: 15 },
  { date: 'May 07', value: 4 },
  { date: 'May 08', value: 40 },
  { date: 'May 09', value: 18 },
  // Add more data points here if needed
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`Requests`}</p>
        <p className="value">{`${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

const Requests = () => {
  return (
    <div className="card">
      <div className="card-header">
        <h3>Requests</h3>
        <p>Check request for the employees</p>
      </div>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart data={data}>
            <XAxis dataKey="date" tick={{ fontSize: 9 }} />
            <YAxis hide />
            <Tooltip content={<CustomTooltip />} /> {/* Use custom tooltip */}
            <Area type="monotone" dataKey="value" stroke="#f76767" fill="#f76767" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Requests;


