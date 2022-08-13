import React, { useState } from 'react';
import SearchFilter from './SearchFilter';
import ContentView from './ContentView';
import './Home.css';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className='home-container'>
      {/* Passing data to sibling components
  1. useState
  2. setState for fetching data from one sibling
  3. state for sending data to another sibling */}
      <SearchFilter setSearchTerm={setSearchTerm} />
      <ContentView searchTerm={searchTerm} />
    </div>
  );
}
