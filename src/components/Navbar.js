import React from 'react';
import './Navbar.css';

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
      <div className='nav-elements'>Home</div>
      <div className='nav-elements'>About</div>
      <div className='nav-elements'>Contact</div>
    </div>
  );
}
