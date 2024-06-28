import React from 'react';
import './AverageSalary.css';
import tkicon from '../../assets/tk.png'; // Adjust the path as necessary

const AverageSalary = () => {
  return (
    <div className="employee-stats">
      <div className="stat-cards">
        <div className="upper-sections">
          <div className="icon-containers">
            <img src={tkicon} alt="Tk Icon" className="icon-image" />
          </div>
          <div className="stat-infos">
            <h3>80,670</h3>
            <p>Average Salary</p>
          </div>
        </div>
        <div className="lower-sections">
          <span className="changes">-2.3% from last month</span>
        </div>
      </div>
    </div>
  );
};

export default AverageSalary;


