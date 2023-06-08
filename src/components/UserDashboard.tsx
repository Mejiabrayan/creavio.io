import React from 'react';
import Image from 'next/image';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { notFound } from 'next/navigation';
import LargeHeading from '@/components/ui/LargeHeading';
import AIGenerativeContent from './ui/AIGenerativeContent';

export default async function UserDashboard() {
  // const user = await getServerSession(authOptions);
  // if (!user) return notFound();

  // const imageSrc = user.user.image || '';

  return (
    <div className='min-h-screen'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='py-6'>
          <div className='flex items-center'>
            <div className='flex-shrink-0'>
              <Image
                className='h-12 w-12 rounded-full'
                src={''}
                alt=''
                width={48}
                height={48}
              />
            </div>
            <div className='ml-4'>
              <LargeHeading
                size='sm'
                className='text-gray-600 text-center lg:text-3xl'
              >
                Welcome back, Brayan Mejia
              </LargeHeading>
            </div>
          </div>
        </div>
        <div className='flex flex-col'>
          <div className='-my-2 overflow-x-visible sm:-mx-6 lg:-mx-8'>
            <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
              <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
                <div className='px-4 py-5 sm:px-6'>
                  <h3 className='text-lg leading-6 font-medium text-gray-900'>
                    Dashboard Content
                  </h3>
                  <p className='mt-1 max-w-2xl text-sm text-gray-500'>
                    Replace with your dashboard content.
                  </p>
                </div>
              </div>
              <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
                <div className='px-4 py-5 sm:px-6'>
                  <h3 className='text-lg leading-6 font-medium text-gray-900'>
                    Dashboard Content
                  </h3>
                  <p className='mt-1 max-w-2xl text-sm text-gray-500'>
                    {/* <KeywordGenerator /> */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-8 flex flex-col justify-center items-center mb-20'>
        

          {/* <AIGenerativeContent /> */}
        </div>
      </div>
    </div>
  );
}
