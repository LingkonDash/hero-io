import React from 'react';
import Card from './Card';

const Cards = ({ data }) => {

  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-3 md:px-10 max-w-380 mx-auto'>
      {
        data.map(item => <Card key={item.id} item={item} />)
      }
    </div>
  );
};

export default Cards;