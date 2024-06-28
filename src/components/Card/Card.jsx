import React from 'react';
import "./Card.css";
import { IoPerson } from "react-icons/io5";
import CountUp from "react-countup";

const Card = ({data}) => {

  const {title,
    amount, 
    growth, 
    icon,
    backgroundColor} = data;

  const numericAmount = 
  title === "Total Sales" ||
  title === "Total Expenses" ||
  title === "Total Visitors" 
    ? parseFloat(amount.replace(/[$,]/g, ""))
    : amount;


  const displayDollarSign = 
  title === "Total Sale" || title ==="Total Expenses";

  return (
    <div className="card" style={{ backgroundColor}}>
        <div classname="card-header">
        <div classname="card-icon" style={{color:backgroundColor}}>
            {icon}
        </div>
        </div>
        <div classname="card-body">
            <h2 className="amount">
              <CountUp start={0} end={numericAmount} duration={2}
              separator="," prefix={displayDollarSign ? '$' : ""} 
              />
              </h2> 
            <div className="growth">
                <p>Total Sales</p>
                <span>+12%</span>
            </div>       
        </div>    
        
    </div>
  );
};

export default Card;