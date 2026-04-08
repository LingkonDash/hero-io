import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import InstalledCard from '../Components/Cards/InstalledCard';

const Installed = () => {

  const [installedApp, setInstalledApp] = useContext(AppContext)

  if (installedApp.length === 0) return <h2 className='font-bold text-4xl text-center mt-30'>No Installed Apps Found.</h2>

  function sortHandler(type) {

    if (type === 'ascending') {
      const newData = [...installedApp];
      newData.sort((a, b) => a.size - b.size)
      setInstalledApp(newData)

    } else if (type === 'descending') {
      const newData = [...installedApp];
      newData.sort((a, b) => b.size - a.size);
      setInstalledApp(newData)

    } else if (type === 'rating') {
      const newData = [...installedApp];
      newData.sort((a, b) => b.ratingAvg - a.ratingAvg);
      setInstalledApp(newData)
    }
  }

  return (
    <div className='p-10'>

      <div className='space-y-3 text-center'>
        <h2 className='font-bold text-4xl'>Your Installed Apps</h2>
        <p className='text-gray-400 text-lg '>Explore All Trending Apps on the Market developed by us</p>
      </div>

      <div>
        <div className='flex flex-wrap justify-center gap-4 md:justify-between items-center mt-10'>

          <h2 className='font-bold text-3xl'>({installedApp.length}) Apps Found</h2>
          <div className='w-60 gap-2 flex justify-center items-center'>
            <select className="select" onChange={(e) => sortHandler(e.target.value)}>
              <option value="rating">Sort by Ratings</option>
              <option value="ascending">Size Ascending</option>
              <option value="descending">Size Descending</option>
            </select>
          </div>

        </div>
      </div>

      <div className='my-10 space-y-5'>
        {
          installedApp.map(item => <InstalledCard key={item.id} item={item} installedApp={installedApp} setInstalledApp={setInstalledApp} />)
        }
      </div>

    </div>
  );
};

export default Installed;