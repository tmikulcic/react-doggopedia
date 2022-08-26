import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import About from './components/About/About';

import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='main-container'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
