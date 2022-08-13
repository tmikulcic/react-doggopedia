import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import './App.css';

function App() {
  return (
    <div className='main-container'>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
