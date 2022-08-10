import React, { useState } from 'react';
import Navbar from './components/Navbar';
import SearchFilter from './components/SearchFilter';
import ContentView from './components/ContentView';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className='main-container'>
      <div className='left-side'>
        <Navbar />
      </div>
      <div className='right-side'>
        {/* Passing data to sibling components
        1. useState
        2. setState for fetching data from one sibling
        3. state for sending data to another sibling */}
        <SearchFilter setSearchTerm={setSearchTerm} />
        <ContentView searchTerm={searchTerm} />
      </div>
    </div>
  );
}

export default App;
