import React from 'react';
import { HashLoader } from 'react-spinners';

const Loading = () => {
  return (
    <div className='w-full h-[50vh] flex justify-center items-center'><HashLoader color="#b601e3" size={100} /></div>
  );
};

export default Loading;