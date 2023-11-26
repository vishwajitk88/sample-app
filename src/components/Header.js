// Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <span>Sample App</span>
      </div>
      <nav className="nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
