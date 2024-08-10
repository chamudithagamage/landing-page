import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-logo">Travelzilla</div>
      <ul className="nav-menu">
        <li><Link to="/">Home</Link></li> {/* Assuming the Home component is mapped to "/" */}
        <li><Link to="/explore">Explore</Link></li>
        {/* <li><Link to="/pricing">Pricing</Link></li> */}
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact" className='nav-contact'>Contact</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
