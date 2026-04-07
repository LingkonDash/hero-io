import React from 'react';
import footerImg from '../assets/Footer.png';

const Footer = () => {
  return (
    <section>
      <div className='max-w-400 mx-auto'>
        <img className='w-full' src={footerImg} alt="Footer image" />
      </div>
    </section>
  );
};

export default Footer;