import React from 'react';
import "./Header.css";
import { IoLogOutOutline, IoNotifications, IoSearch,IoPeople } from "react-icons/io5";



const Header = () => {
  return (
    <div className="header">

        <div className="search-box">
            <IoSearch className="search-icon" />
            <input type="text" placeholder="Search..." />
            
        </div>

        <div className="user-box">
            <IoNotifications className="user-icon" />
            <IoPeople className="user-icon" />
        </div>
    </div>
  );
};

export default Header;