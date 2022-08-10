import React from 'react';

// setSearchTerm is shared with parent component
export default function SearchFilter({ setSearchTerm }) {
  function searchChange(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <div className='search-filter'>
      <button className='filter-button'>Filter</button>
      <input
        className='search-window'
        type='text'
        placeholder='Type dog breed...'
        onChange={searchChange}
      ></input>
      <button className='search-button'>Search</button>
    </div>
  );
}
