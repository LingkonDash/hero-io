import React from 'react';
import { useNavigate } from 'react-router';

const Card = ({ item }) => {

  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`app-details/${item.title}`)} className="rounded-md bg-white p-4 shadow-md border border-gray-100 font-sans hover:scale-102 transition cursor-pointer">
      <div className="relative mb-4 aspect-square overflow-hidden p-2">
        <img 
          src={item.image}
          alt={item.title}
          className="h-full w-full rounded-4xl"
        />
      </div>

      <h1 className="mb-3 text-xl font-bold text-gray-900">{item.title}</h1>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 rounded-md bg-[#e6fcf5] px-2 py-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#0ca678"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" />
          </svg>
          <span className="text-sm font-bold text-[#0ca678]">
            {(item.downloads / 1000000).toFixed(1)} M
          </span>
        </div>

        <div className="flex items-center gap-1 rounded-md bg-[#fff4e6] px-2 py-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="#fd7e14"
            stroke="#fd7e14"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          <span className="text-sm font-bold text-[#fd7e14]">{item.ratingAvg}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;