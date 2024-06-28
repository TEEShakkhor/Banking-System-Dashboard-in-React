import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import './SalaryDisbursed.css';


const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="custom-tooltip">
        <p>{`Month: ${data.name}`}</p>
        <p>{`৳ ${data.value}`}</p>
      </div>
    );
  }

  return null;
};

const SalaryDisbursed = () => {
  const [activeTab, setActiveTab] = useState('Monthly');

  const data = [
    { name: 'Jan', value: 50000 },
    { name: 'Feb', value: 60000 },
    { name: 'Mar', value: 75000 },
    { name: 'Apr', value: 20000 },
    { name: 'May', value: 80000 },
    { name: 'Jun', value: 95000 },
    { name: 'Jul', value: 10000 },
    { name: 'Sep', value: 6000 },
    { name: 'Oct', value: 75000 },
    // Add more data points here...
  ];

  return (
    <div className="salary-disbursed-container">
      <div className="header-container">
        <h4>Salary Disbursed</h4>
        <div className="tabs">
          {['Monthly', 'Quarterly', 'Yearly'].map(tab => (
            <span
              key={tab}
              className={`tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </span>
          ))}
        </div>
      </div>
      <div className="TotalSalary-card">
          <h3>৳243,000</h3>
          <p>Total Disbursed</p>
      </div>
      <ResponsiveContainer width="100%" height={140}>
        <LineChart data={data}>
          <XAxis dataKey="name" hide={true} />
          <YAxis hide={true}/>
          <Tooltip content={<CustomTooltip />}/>
          <Line type="monotone" dataKey="value" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
      <div className="summary-cards">
        <div className="summary-card">
          <h3>৳106,640</h3>
          <p>Average Spent</p>
        </div>
        <div className="summary-card">
          <h3>৳867,900</h3>
          <p>Spendings</p>
        </div>
        <div className="summary-card">
          <h3>৳243,000</h3>
          <p>Disbursed</p>
        </div>
      </div>
    </div>
  );
};

export default SalaryDisbursed;


