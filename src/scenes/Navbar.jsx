import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/noon academy.svg'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="menu">
            <div className="nav-link">Career</div>
            <div className="nav-link">Support</div>
            <div>Sign In</div>
            <button className="nav-button">
                Get The App✌️
            </button>
        </div>
    </div>
  )
}

export default Navbar