import React from 'react';

export default function Card(props) {
  return (
    <div className='card'>
      <img
        className='card-image'
        src={`.${props.item.img}`}
        alt={props.item.breed}
      ></img>
      <div className='card-name'>{props.item.breed}</div>
    </div>
  );
}
