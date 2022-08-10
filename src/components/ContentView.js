import React from 'react';
import Card from './Card';
import data from './data';

// setSearch is shared with parent component
export default function ContentView({ searchTerm }) {
  // How to map filtered data (search)
  const cards = data
    .filter((value) => {
      if (searchTerm === '') return value;
      else if (value.breed.toLowerCase().includes(searchTerm.toLowerCase()))
        return value;
    })
    .map((item) => {
      return <Card key={item.id} item={item} />;
    });

  return <div className='content-view'>{cards}</div>;
}
