import React from "react";
import './Header.css';

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-logo">
        <span className="font-bold">Learning</span> Vault
      </div>
      <nav className="header-menu">
        <div className="header-menu-item selected">
          <div className="menu-text">Home</div>
          <div className="indicator" />
        </div>
        <div className="header-menu-item">Activity List</div>
        <div className="header-menu-item">New Arrivals</div>
        <div className="header-menu-item">Gift Set</div>
        <div className="header-menu-item">Visit Us</div>
      </nav>
    </header>
  );
}

export default Header;
