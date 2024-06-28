import React from 'react'
import "./MenuList.css";

import { Link } from "react-router-dom";
import { IoMdPeople, IoIosPerson, IoIosSettings } from 'react-icons/io';
import { AiOutlineDollar } from 'react-icons/ai';
import { BsFileEarmarkCheckFill } from 'react-icons/bs';
import { BiSolidReport } from 'react-icons/bi';
import { FaRegCreditCard, FaFileInvoiceDollar } from 'react-icons/fa';
import { CiSquareQuestion } from 'react-icons/ci';
import { MdOutlineDashboard } from 'react-icons/md';



const MenuList = () => {
  return (
    <div className="menu--list-container">
    <div className="menu--list">
    <ul>
        <li className="menu--list-item active">
            <Link to="/">
                <MdOutlineDashboard />
                Dashboard
            </Link>
        </li>
        <li className="menu--list-item">
            <Link to="/">
                <IoMdPeople />
                Employees
            </Link>
        </li>
        <li className="menu--list-item">
            <Link to="/">
                <BsFileEarmarkCheckFill />
                Approvals
            </Link>
        </li>
        <li className="menu--list-item">
            <Link to="/">
                <BiSolidReport />
                Reports
            </Link>
        </li>

        <li className="menu--list-item">
            <Link to="/">
                <AiOutlineDollar />
                Loans
            </Link>
        </li>

        <li className="menu--list-item">
            <Link to="/">
                <FaRegCreditCard />
                Cards
            </Link>
        </li>

        <li className="menu--list-item">
            <Link to="/">
                <FaFileInvoiceDollar />
                Invoice
            </Link>
        </li>

        <li className="menu--list-item">
            <Link to="/">
                <CiSquareQuestion />
                Requests
            </Link>
        </li>
    </ul>
    </div>

    <div className="menu--list--bottom">
        <ul>
        <li className="menu--list-item">
            <Link to="/">
                <IoIosPerson />
                Profile
            </Link>
        </li>
        <li className="menu--list-item">
            <Link to="/">
                <IoIosSettings />
                Settings
            </Link>
        </li>
        </ul>
    </div>
    </div>
  );
};

export default MenuList;