import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='logo'>
        <img
          className='logo-picture'
          src='./images/logo.png'
          alt='logo shiba'
        ></img>
        <div className='logo-text'>Doggopedia</div>
      </div>
      <Link to='/' className='nav-elements'>
        Home
      </Link>
      <Link to='/about' className='nav-elements'>
        About
      </Link>
      <Link to='/contact' className='nav-elements'>
        Contact
      </Link>
    </div>
  );
}
