import React from 'react';
import './SearchFilter.css';

// setSearchTerm is shared with parent component
export default function SearchFilter({ setSearchTerm }) {
  function searchChange(event) {
    setSearchTerm((prevState) => {
      return { ...prevState, search: event.target.value };
    });
  }

  function toggleChange(event) {
    setSearchTerm((prevState) => {
      return { ...prevState, filter: event.target.value };
    });
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
          value=''
          name='size'
          onChange={toggleChange}
        />
        <label
          style={{ borderRadius: '8px 0px 0px 8px' }}
          htmlFor='All'
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
          onChange={toggleChange}
        />
        <label htmlFor='Small' type='text' name='Small'>
          Small
        </label>
        <input
          className='filter-radio'
          type='radio'
          id='Medium'
          value='Medium'
          name='size'
          onChange={toggleChange}
        />
        <label htmlFor='Medium' type='text' name='Medium'>
          Medium
        </label>
        <input
          className='filter-radio'
          type='radio'
          id='Large'
          value='Large'
          name='size'
          onChange={toggleChange}
        />
        <label
          style={{ borderRadius: '0px 8px 8px 0px' }}
          htmlFor='Large'
          type='text'
          name='Large'
        >
          Large
        </label>
      </div>
    </div>
  );
}
