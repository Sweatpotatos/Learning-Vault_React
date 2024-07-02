import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './Header.css';

const Header = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <header className="header-container">
      <div className="header-logo" onClick={handleLogoClick}>
        <span className="font-bold">Learning</span> Vault
      </div>
      <nav className="header-menu">
        <div className="header-menu-item selected">
          <Link to="/" className="menu-text">Home</Link>
          <div className="indicator" />
        </div>
        <div className="header-menu-item">
          <Link to="/activity-list" className="menu-text">Activity List</Link>
        </div>
        <div className="header-menu-item">
          <Link to="/new-arrivals" className="menu-text">New Arrivals</Link>
        </div>
        <div className="header-menu-item">
          <Link to="/gift-set" className="menu-text">Gift Set</Link>
        </div>
        <div className="header-menu-item">
          <Link to="/visit-us" className="menu-text">Visit Us</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;