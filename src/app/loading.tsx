import React from 'react';
import { PulseLoader } from 'react-spinners';

const Loading = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-gray-100'>
      <div className='flex items-center space-x-4'>
        <PulseLoader color='#4B5563' size={10} />
        <span className='text-gray-700 font-medium text-lg'>Loading...</span>
      </div>
      <p className='text-gray-500 mt-4 text-sm'>Please wait while we load the content.</p>
    </div>
  );
};

export default Loading;
