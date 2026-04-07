import React from 'react';
import { useParams } from 'react-router';
import useFetchData from '../hooks/useFetchData';
import Loading from './Shared/Loading';

const AppDetails = () => {

  const { appName } = useParams();

  const [data, loadingState] = useFetchData();


  if (loadingState) return <Loading />;

  const item = data.find(item => item.title === appName);


  return (
    <div className='max-w-400 mx-auto p-5'>

      {/* app  */}
      <div className="flex w-full md:ml-5 justify-center flex-wrap items-center gap-10 bg-white p-8 font-sans">
        {/* App Icon Container */}
        <div className="h-64 w-64 shrink-0 overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full rounded-[50px]"
          />
        </div>

        {/* Details Section */}
        <div className="flex-1">
          <div className="mb-2">
            <h1 className="text-4xl font-bold text-black">{item.title}</h1>
            <p className="mt-1 text-lg font-semibold text-gray-500">
              Developed by : <span className="text-[#6366f1]">{item.companyName}</span>
            </p>
          </div>

          {/* Horizontal Divider */}
          <hr className="my-6 border-gray-200" />

          {/* Stats Row */}
          <div className="mb-8 flex items-start gap-12">
            {/* Downloads */}
            <div className="flex flex-col items-start">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mb-1">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" />
              </svg>
              <span className="text-sm font-medium text-gray-500">Downloads</span>
              <span className="text-2xl font-extrabold text-gray-900">
                {(item.downloads / 1000000).toFixed(1)}M
              </span>
            </div>

            {/* Ratings */}
            <div className="flex flex-col items-start">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#f97316" stroke="#f97316" className="mb-1">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <span className="text-sm font-medium text-gray-500">Average Ratings</span>
              <span className="text-2xl font-extrabold text-gray-900">{item.ratingAvg}</span>
            </div>

            {/* Reviews */}
            <div className="flex flex-col items-start">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#6366f1" stroke="#6366f1" className="mb-1">
                <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
              </svg>
              <span className="text-sm font-medium text-gray-500">Total Reviews</span>
              <span className="text-2xl font-extrabold text-gray-900">
                {(item.reviews / 1000).toLocaleString('en-US', { minimumFractionDigits: 3 })}K
              </span>
            </div>
          </div>

          {/* Installed Badge */}
          <button className="btn rounded-md bg-[#00d084] px-4 py-2 text-sm font-bold text-white">
            Install Now ({item.size} MB)
          </button>
        </div>
      </div>

      {/* chart */}
      <div>

      </div>


      {/* Description  */}
      <div className='space-y-3 p-2 mt-5 md:p-10'>
        <h2 className='font-semibold text-2xl'>Description</h2>
        <p className='text-gray-400'>{item.description}</p>
      </div>

    </div>
  );
};

export default AppDetails;