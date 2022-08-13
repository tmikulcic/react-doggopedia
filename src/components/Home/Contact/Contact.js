import React from 'react';
import '../About/About.css';
import './Contact.css';

export default function Contact() {
  return (
    <div className='info-container'>
      <div className='header'>Contact</div>
      <div className='paragraph'>
        You can follow my work and check for other projects here:
      </div>

      <a href='https://github.com/tmikulcic'>
        <img
          className='contact-logo'
          src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg'
        />
      </a>
      <div className='paragraph'>Check me out on Social Media:</div>
      <a href='https://facebook.com'>
        <img
          className='contact-logo'
          src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg'
        />
      </a>
      <a href='https://twitter.com'>
        <img
          className='contact-logo'
          src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg'
        />
      </a>
      <a href=''></a>
    </div>
  );
}
