import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-logo">Learning Vault</div>
      <nav className="header-menu">
        <div className="header-menu-item selected">
          Home
          <div className="indicator"></div>
        </div>
        <div className="header-menu-item">
          Activity List
        </div>
        <div className="header-menu-item">
          New Arrivals
        </div>
        <div className="header-menu-item">
          Gift Set
        </div>
        <div className="header-menu-item">
          Visit Us
        </div>
      </nav>
    </header>
  );
}

export default Header;
