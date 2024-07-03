import React from "react";
import { Link } from "react-router-dom";

import "./MobileNavbar.scss";

import { HomeIcon, CalendarIcon, SearchIcon, UserIcon } from "../../icons";

function MobileNavbar() {
  return (
    <div className="mobile-navbar">
      <ul>
        <li>
          <Link to="/"> <HomeIcon /> </Link>
        </li>
        <li>
          <Link to="/discover"> <SearchIcon /> </Link>
        </li>
        <li>
          <Link to="/calendar"> <CalendarIcon /> </Link>
        </li>
        <li>
          <Link to="/profile"> <UserIcon /> </Link>
        </li>
      </ul>
    </div>
  );
}

export default MobileNavbar;
