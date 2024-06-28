import React from 'react';
import "./Container.css";
import Activity from "../Activity/Activity";
import SalaryDisbursed from '../SalaryDisbursed/SalaryDisbursed';
import TotalEmployee from '../TotalEmployee/TotalEmployee';
import AverageSalary from '../AverageSalary/AverageSalary';
import Requests from '../Requests/Requests';
import EmployeeList from '../EmployeeList/EmployeeList';

const ChartContainer = () => {
    return (
        <div className="dashboard">
            <div className="grid">
                <div className="grid-item activity">
                    <Activity days={725} />
                </div>
                <div className="grid-item salary">
                    <SalaryDisbursed />
                </div>
                <div className="subgrid">
                    <div className="grid-item employee">
                        <TotalEmployee />
                    </div>
                    <div className="grid-item average">
                        <AverageSalary />
                    </div>
                </div>
                <div className="grid-item requests">
                    <Requests />
                </div>
            </div>
            <div className="employee-tab">
                <EmployeeList /> 
            </div>
        </div>
    );
};

export default ChartContainer;

