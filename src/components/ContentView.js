import React from 'react';
import Card from './Card';
import data from './data';

export default function ContentView() {
  const cards = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });

  return <div className='content-view'>{cards}</div>;
}
