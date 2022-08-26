import React, { useState } from 'react';
import './Card.css';

export default function Card(props) {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div
      className='card'
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div className='unopen'>
        <img
          className='card-image'
          src={`.${props.item.img}`}
          alt={props.item.breed}
        ></img>
        <div className='card-name'>{props.item.breed}</div>
      </div>
      {isHovering && (
        <div className='open' onMouseOver={handleMouseOut}>
          <div className='breed-info'>Size: {props.item.size}</div>
          <div className='breed-info'>Description:</div>
          <div className='breed-info'>{props.item.description}</div>
        </div>
      )}
    </div>
  );
}
