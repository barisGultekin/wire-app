import React from "react";
import { Link } from "react-router-dom";

import "./SideNavbar.scss";

function SideNavbar() {
  return (
    <div className="side-navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/discover">Discover</Link>
        </li>
        <li>
          <Link to="/calendar">Calendar</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </div>
  );
}

export default SideNavbar;
