'use client';

import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { useEffect, useState } from 'react';

const Analytics = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Replace with your own data fetching logic
    const fetchData = async () => {
      const response = await fetch('https://api.publicapis.org/entries', {
        next: {
          revalidate: 5,
        },
      });
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, []);

  return (
    <div className='px-4 py-5  shadow rounded-lg'>
      <h3 className='text-lg leading-6 font-medium text-gray-900 mb-4'>
        Analytics
      </h3>
      <div className='h-80'>
        <BarChart width={500} height={300} data={data}>
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
          <Bar dataKey='views' fill='#3B82F6' />
          <Bar dataKey='likes' fill='#F59E0B' />
          <Bar dataKey='comments' fill='#10B981' />
        </BarChart>
      </div>
    </div>
  );
};

export default Analytics;
