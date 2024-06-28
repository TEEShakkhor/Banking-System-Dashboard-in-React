import React from 'react';
import { FaUserFriends } from 'react-icons/fa';
import "./TotalEmployee.css"

const TotalEmployee = () => {
  return (
    <div className="employee-stat">
      <div className="stat-card">
        <div className="upper-section">
          <div className="icon-container">
            <FaUserFriends />
          </div>
          <div className="stat-info">
            <h3>256</h3>
            <p>Total Employee</p>
          </div>
        </div>
        <div className="lower-section">
          <span className="change">+3.4% from last month</span>
        </div>
      </div>
    </div>
  );
};

export default TotalEmployee;


