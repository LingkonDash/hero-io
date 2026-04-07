import React from 'react';
import heroImg from '../assets/heroSection.png'

const BannerSection = () => {
  return (
    <section>
      <div className='max-w-400 mx-auto'>
        <img className='w-full' src={heroImg} alt="heroImg" />
      </div>
    </section>
  );
};

export default BannerSection;