import React, {useState} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-logo">Travelzilla</div>
      <ul className="nav-menu">
        <li>Home</li>
        <li><Link to = "../Pages/Explore.jsx">Explore</Link></li>
        <li><Link to = "../Pages/Pricing.jsx">Pricing</Link></li>
        <li><Link to = "../Pages/About.jsx">About</Link></li>
        <li><Link to = "../Pages/Contact.jsx" className='nav-contact'>Contact</Link></li>
      </ul>
    </div>
  )
}
export default Navbar
