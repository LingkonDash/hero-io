import React from 'react';
import { toast } from 'react-toastify';

const InstalledCard = ({ item, installedApp, setInstalledApp }) => {

  const handleUninstall = () => {
    const newArr = installedApp.filter(obj => obj.id !== item.id)

    setInstalledApp(newArr)

    toast.success(`${item.title} Uninstalled successfully`)

  } 

  return (
    <div className="flex w-full items-center justify-between rounded-lg border border-gray-100 bg-white p-3 shadow-sm">
      {/* Left Section: Icon and Info */}
      <div className="flex items-center gap-4">
        {/* App Icon */}
        <div className="h-16 w-16 shrink-0 overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-contain rounded-xl"
          />
        </div>

        {/* Text Details */}
        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-bold text-black">{item.title}</h2>

          <div className="flex items-center gap-3">
            {/* Downloads */}
            <div className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00d084" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" />
              </svg>
              <span className="text-sm font-semibold text-[#00d084]">
                {(item.downloads / 1000000).toFixed(1)}M
              </span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="#ff922b" stroke="#ff922b">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <span className="text-sm font-semibold text-[#ff922b]">{item.ratingAvg}</span>
            </div>

            {/* Size */}
            <span className="text-sm font-medium text-gray-500">{item.size} MB</span>
          </div>
        </div>
      </div>

      {/* Right Section: Button */}
      <button
        onClick={handleUninstall}
        className=" btn rounded-md bg-[#00d084] px-5 py-2 text-sm font-bold text-white transition-colors hover:bg-[#00b371]"
      >
        Uninstall
      </button>
    </div>
  );
};

export default InstalledCard;