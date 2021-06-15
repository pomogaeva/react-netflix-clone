import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener('scroll');
    };
  }, []);

  return (
    <div className={`nav ${show && 'nav__blank'}`}>
      <img 
        className='nav__logo'
        src='https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png'
        alt='Netflix Logo' 
      />

      <img 
        className='nav__avatar'
        src='https://occ-0-2705-2706.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41'
        alt='Avatar'
      />
      
    </div>
  )
}

export default Navbar
