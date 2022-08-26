import React, { useEffect } from 'react';
import Card from './Card';
import data from '../data';
import './ContentView.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

// setSearch is shared with parent component
export default function ContentView({ searchTerm }) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  // How to map filtered data (search)
  const cards = data
    .filter((value) => {
      if (
        searchTerm.search === '' &&
        (searchTerm.filter === '' || searchTerm.filter === 'All')
      )
        return value;
      else if (
        value.breed.toLowerCase().includes(searchTerm.search.toLowerCase()) &&
        (searchTerm.filter === '' || searchTerm.filter === 'All')
      )
        return value;
      else if (
        value.breed.toLowerCase().includes(searchTerm.search.toLowerCase()) &&
        value.size === searchTerm.filter
      )
        return value;
    })
    .map((item) => {
      return <Card key={item.id} item={item} />;
    });

  return (
    <div>
      <div data-aos='fade-up' className='content-view'>
        {cards}
      </div>
    </div>
  );
}
