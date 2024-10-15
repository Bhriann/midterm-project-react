import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {

  // State to manage the visibility of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu open/close state
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the current state
  };

  // Close menu when link is clicked
  const handleLinkClick = () => {
    setIsMenuOpen(false);  
  };

  return (
    <nav className="navbar">
      {/* Hamburger Icon for Mobile */}
      <div className="hamburger" onClick={handleMenuToggle}>
        &#9776; {/* Hamburger Menu Icon */}
      </div>

      {/* Navigation Links */}
      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/main/add-item" className="nav-link" onClick={handleLinkClick}>Add Item</Link>
        <Link to="/main/update-item" className="nav-link" onClick={handleLinkClick}>Update Item</Link>
        <Link to="/main/remove-item" className="nav-link" onClick={handleLinkClick}>Remove Item</Link>
        <Link to="/main/display-all-items" className="nav-link" onClick={handleLinkClick}>Display All Items</Link>
        <Link to="/main/display-by-category" className="nav-link" onClick={handleLinkClick}>Display By Category</Link>
        <Link to="/main/display-low-stock-items" className="nav-link" onClick={handleLinkClick}>Display Low Stock Items</Link>
        <Link to="/main/sort-items" className="nav-link" onClick={handleLinkClick}>Sort Items</Link>
        <Link to="/main/search-item" className="nav-link" onClick={handleLinkClick}>Search Item</Link>
      </div>
    </nav>
  );
};

export default NavBar;

