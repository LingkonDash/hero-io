import React from 'react';
import useFetchData from '../hooks/useFetchData';
import Cards from '../Components/Cards/Cards';
import Loading from '../Components/Shared/Loading';
import { CiSearch } from 'react-icons/ci';

const Apps = () => {

  const [data, loadingState] = useFetchData();


  return (
    <div className='p-10'>

      <div className='space-y-3 text-center'>
        <h2 className='font-bold text-4xl'>Our All Applications</h2>
        <p className='text-gray-400 text-lg '>Explore All Apps on the Market developed by us. We code for Millions</p>
      </div>

      <div>
        <div className='flex flex-wrap justify-center gap-4 md:justify-between items-center mt-10'>

          <h2 className='font-bold text-3xl'>({data.length}) Apps Found</h2>
          <div className='input w-60 gap-2 flex justify-center items-center'>
            <CiSearch size={24} />
            <input type="text" placeholder='Search Apps' />
          </div>

        </div>
      </div>

      {
        loadingState ?
          <Loading />
          : <div className='py-12'>
            <Cards data={data} />
          </div>
      }

    </div>
  );
};

export default Apps;