import React from 'react';
import './SearchFilter.css';

// setSearchTerm is shared with parent component
export default function SearchFilter({ setSearchTerm }) {
  function searchChange(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <div className='search-filter'>
      <div className='search'>
        <button className='filter-button'>Filter</button>
        <input
          className='search-window'
          type='text'
          placeholder='Type dog breed...'
          onChange={searchChange}
        ></input>
        <button className='search-button'>Search</button>
      </div>
      <div className='filter'>
        <input
          className='filter-radio'
          type='radio'
          id='All'
          value='All'
          name='size'
        />{' '}
        <label for='All' type='text' name='All' checked='true'>
          All
        </label>
        <input
          className='filter-radio'
          type='radio'
          id='Small'
          value='Small'
          name='size'
        />{' '}
        <label for='Small' type='text' name='Small'>
          Small
        </label>
        <input
          className='filter-radio'
          type='radio'
          id='Medium'
          value='Medium'
          name='size'
        />{' '}
        <label for='Medium' type='text' name='Medium'>
          Medium
        </label>
        <input
          className='filter-radio'
          type='radio'
          id='Large'
          value='Large'
          name='size'
        />{' '}
        <label for='Large' type='text' name='Large'>
          Large
        </label>
      </div>
    </div>
  );
}
