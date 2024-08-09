import React, {useState} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-logo">Travelzilla</div>
      <ul className="nav-menu">
        <li>Home</li>
        <li>Explore</li>
        <li>Pricing</li>
        <li>About</li>
        <li className='nav-contact'>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar
