import React, { useState } from 'react';
import './SearchFilter.css';

// setSearchTerm is shared with parent component
export default function SearchFilter({ setSearchTerm }) {
  const [userInput, setUserInput] = useState({
    search: '',
    filter: '',
  });

  function searchChange(event) {
    setUserInput({
      ...userInput,
      search: event.target.value,
    });
    setSearchTerm(userInput);
  }

  function toggleChange(event) {
    setUserInput({
      ...userInput,
      filter: event.target.value,
    });
    setSearchTerm(userInput);
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
          onChange={toggleChange}
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
          onChange={toggleChange}
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
          onChange={toggleChange}
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
          onChange={toggleChange}
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
