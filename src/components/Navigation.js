import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="hamburger-menu">
      <div className="nav-primary">
        <div className="nav-content">
          <div className="nav-links">
            <div className="nav-link">
              <NavLink to="/about">About</NavLink>
            </div>
            <div className="nav-link">
              <NavLink to="/services">Services</NavLink>
            </div>
          </div>
        </div>
        <div className="hover-bg"></div>
      </div>
      <div className="nav-secondary"></div>
    </div>
  );
};

export default Navigation;
