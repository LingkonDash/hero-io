import React from 'react';
import BannerSection from '../Components/BannerSection';
import useFetchData from '../hooks/useFetchData';
import Loading from '../Components/Shared/Loading';
import Cards from '../Components/Cards/Cards';
import { useNavigate } from 'react-router';

const Home = () => {

  const navigate = useNavigate();
  const [data, loadingState] = useFetchData();


  return (
    <div className='bg-gray-100'>
      <BannerSection />
      <div className='p-10'>

        <div className='space-y-3 text-center'>
          <h1 className='font-bold text-4xl'>Trending Apps</h1>
          <p className='text-gray-400 text-lg '>Explore All Trending Apps on the Market developed by us</p>
        </div>

        {
          loadingState ?
            <Loading />
            : <div className='py-12'>
              <Cards data={data.slice(0, 4)} />
            </div>
        }

        <div className='flex justify-center items-center w-full'>
          <button onClick={() => navigate('/apps')} className='btn btn-primary bg-purple-600 border-none'>Show All</button>
        </div>

      </div>
    </div>
  );
};

export default Home;