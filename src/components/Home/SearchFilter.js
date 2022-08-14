import React from 'react';
import './SearchFilter.css';

// setSearchTerm is shared with parent component
export default function SearchFilter({ setSearchTerm }) {
  function searchChange(event) {
    setSearchTerm(event.target.value);
  }

  function toggleRadio(event) {
    // setFilterTerm(event.target.value);
    console.log(event.target.value);
  }

  return (
    <div className='search-filter'>
      <div className='search'>
        <input
          className='search-window'
          type='text'
          placeholder='Type dog breed...'
          onChange={searchChange}
        ></input>
      </div>

      <div className='filter'>
        <input
          className='filter-radio'
          type='radio'
          id='All'
          value='All'
          name='size'
          onChange={toggleRadio}
        />
        <label
          style={{ borderRadius: '8px 0px 0px 8px' }}
          for='All'
          type='text'
          name='All'
        >
          All
        </label>
        <input
          className='filter-radio'
          type='radio'
          id='Small'
          value='Small'
          name='size'
          onChange={toggleRadio}
        />
        <label for='Small' type='text' name='Small'>
          Small
        </label>
        <input
          className='filter-radio'
          type='radio'
          id='Medium'
          value='Medium'
          name='size'
          onChange={toggleRadio}
        />
        <label for='Medium' type='text' name='Medium'>
          Medium
        </label>
        <input
          className='filter-radio'
          type='radio'
          id='Large'
          value='Large'
          name='size'
          onChange={toggleRadio}
        />
        <label
          style={{ borderRadius: '0px 8px 8px 0px' }}
          for='Large'
          type='text'
          name='Large'
        >
          Large
        </label>
      </div>
    </div>
  );
}
