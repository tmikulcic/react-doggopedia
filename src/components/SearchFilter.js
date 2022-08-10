import React from 'react';

export default function SearchFilter() {
  return (
    <div className='search-filter'>
      <button className='filter-button'>Filter</button>
      <input className='search-window' type='text'></input>
      <button className='search-button'>Search</button>
    </div>
  );
}
