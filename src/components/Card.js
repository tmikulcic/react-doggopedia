import React from 'react';

export default function Card() {
  return (
    <div className='card'>
      <img
        className='card-image'
        src='./images/doggos/samoyed.jpg'
        alt='doggo image'
      ></img>
      <div className='card-name'>Samoyed</div>
    </div>
  );
}
