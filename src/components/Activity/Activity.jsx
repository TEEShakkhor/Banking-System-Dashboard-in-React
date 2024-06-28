import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import "./Activity.css";

const Activity = () => {
  const data = [{ value: 725 }];
  const totalDays = data[0].value;
  const years = Math.floor(totalDays / 365);
  const remainingDays = totalDays % 365;
  const COLORS = ['#0088FE', '#D3D3D3'];

  const renderCircles = () => {
    const circles = [];
    let filledValue = totalDays;

    // Render blue circles for filled years
    for (let i = 0; i < years; i++) {
      circles.push(
        <Pie
          key={`circle-${i}`}
          data={[{ value: 365 }]}
          cx={100}
          cy={112}
          innerRadius={55 + i * 15}
          outerRadius={60 + i * 15}
          fill="#0088FE"
          dataKey="value"
          strokeWidth={1}
        />
      );
      filledValue -= 365;
    }

    // Render partial blue circle for remaining days
    if (remainingDays > 0) {
      circles.push(
        <Pie
          key="partial-circle"
          data={[{ value: remainingDays }, { value: 365 - remainingDays }]}
          cx={100}
          cy={112}
          innerRadius={55 + years * 15}
          outerRadius={60 + years * 15}
          fill="#0088FE"
          dataKey="value"
          strokeWidth={1}
        >
          {[...Array(2)].map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
      );
    }

    // Render outer gray circle
    circles.push(
      <Pie
        key="outer-circle"
        data={[{ value: 365 }]}
        cx={100}
        cy={112}
        innerRadius={75 + years * 15}
        outerRadius={80 + years * 15}
        fill="#D3D3D3"
        dataKey="value"
        strokeWidth={1}
      />
    );

    return circles;
  };

  return (
    <div className="activity-container">
      <h2>Activity</h2>
      <p>With Prime Family</p>
      <div className="chart-wrapper">
        <PieChart width={220} height={220}>
          {renderCircles()}
        </PieChart>
        <div className="value-container">
          <span className="value">{totalDays}</span>
          <span className="label">Days</span>
        </div>
      </div>
    </div>
  );
};

export default Activity;
