import React, { useState } from 'react';
import './Card.css';

export default function Card(props) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }

  return (
    <div className='card'>
      <img
        className='card-image'
        src={`.${props.item.img}`}
        alt={props.item.breed}
        onClick={toggleModal}
      ></img>
      <div className='card-name' onClick={toggleModal}>
        {props.item.breed}
      </div>

      {/* Modal */}
      {modal && (
        <div className='modal'>
          <div className='overlay' onClick={toggleModal}>
            <div className='modal-content'>
              <img
                className='card-image'
                src={`.${props.item.img}`}
                alt={props.item.breed}
                onClick={toggleModal}
              ></img>
              <div className='card-name' onClick={toggleModal}>
                {props.item.breed}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
