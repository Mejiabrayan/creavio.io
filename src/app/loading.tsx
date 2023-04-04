import React from 'react';
import { PulseLoader } from 'react-spinners';

const Loading = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <div className='flex items-center space-x-2'>
        <PulseLoader color='#4B5563' size={10} />
        <span className='text-gray-700 font-medium text-lg'>Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
