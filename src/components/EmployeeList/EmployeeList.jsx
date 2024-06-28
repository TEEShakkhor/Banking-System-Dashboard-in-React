import React, { useState } from 'react';
import './EmployeeList.css';
import { FaEllipsisV, FaAngleDown } from 'react-icons/fa';

const employees = [
  { name: 'Darlene Robertson', id: '43178', role: 'Account director', associated: 'MGI Group', salary: '৳250K', status: 'Paid' },
  { name: 'Savannah Nguyen', id: '43756', role: 'Account Executive', associated: 'Fresh Group', salary: '৳250K', status: 'Unpaid' },
  { name: 'Jacob Jones', id: '97174', role: 'Systems analyst', associated: 'Bashundhara LLC', salary: '৳250K', status: 'Paid' },
  { name: 'Courtney Henry', id: '39635', role: 'Product manager', associated: 'Akij Food & Beverage', salary: '৳250K', status: 'Paid' },
  { name: 'Arlene McCoy', id: '70668', role: 'Marketing director', associated: 'Pran Group', salary: '৳250K', status: 'Unpaid' }
];

const EmployeeList = () => {
  const [headerDropdownVisible, setHeaderDropdownVisible] = useState(false);
  const [kebabDropdownVisible, setKebabDropdownVisible] = useState(null);

  const toggleHeaderDropdown = () => {
    setHeaderDropdownVisible(!headerDropdownVisible);
  };

  const toggleKebabDropdown = (id) => {
    setKebabDropdownVisible(kebabDropdownVisible === id ? null : id);
  };

  return (
    <div className="employee-list">
      <div className="headers">
        <div className="header-left">
          <h3>Employee List</h3>
          <p>| 16</p>
        </div>
        <div className="header-right">
          <p>All departments</p>
          <button className="dropdown-btn" onClick={toggleHeaderDropdown}>
            <FaAngleDown /> {/* Dropdown icon */}
          </button>
          {headerDropdownVisible && (
            <div className="dropdown-menu">
              <div className="dropdown-item">Web</div>
              <div className="dropdown-item">Game</div>
              <div className="dropdown-item">Business</div>
            </div>
          )}
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Associated</th>
            <th>Salary</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee.id}>
              <td>
                <div className="employee-info">
                  <img src={`https://randomuser.me/api/portraits/thumb/men/${employee.id % 10}.jpg`} alt={employee.name} />
                  <div>
                    <span className="employee-name">{employee.name}</span>
                    <span className="employee-id">ID: {employee.id}</span>
                  </div>
                </div>
              </td>
              <td>{employee.role}</td>
              <td>{employee.associated}</td>
              <td>{employee.salary}</td>
              <td>
                <span className={`status ${employee.status.toLowerCase()}`}>{employee.status}</span>
              </td>
              <td>
                <button className="kebab-btn" onClick={() => toggleKebabDropdown(employee.id)}>
                  <FaEllipsisV />
                </button>
                {kebabDropdownVisible === employee.id && (
                  <div className="dropdown-menu kebab-dropdown">
                    <div className="dropdown-item">Approve</div>
                    <div className="dropdown-item">Edit</div>
                    <div className="dropdown-item">Delete</div>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="footer">
        <button className="access-all">Access All</button>
      </div>
    </div>
  );
};

export default EmployeeList;



