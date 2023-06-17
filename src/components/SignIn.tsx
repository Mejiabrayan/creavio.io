import React from 'react';
import { Icons } from './Icons';
import Link from 'next/link';
import UserAuthForm from './UserAuthForm';
import Image from 'next/image';

export const SignIn = () => {
  return (
    <section>
      <div className='relative flex justify-center max-h-min lg:px-0 md:px-12'>
        <div className='relative z-10 flex flex-col flex-1 px-4 py-10 bg-white shadow-2xl lg:py-24 md:flex-none md:px-28 sm:justify-center'>
          <div className='w-full max-w-md mx-auto md:max-w-sm md:px-0 md:w-96 sm:px-4'>
            <div className='flex flex-col'>
              <div>
                <h2 className='text-4xl text-black'>Let&apos;s get started!</h2>
                <p className='mt-2 text-sm text-gray-500'>
                  Complete the details below so I can process your request and
                  then schedule a time to discuss your goals.
                </p>
              </div>
            </div>
            <form>
              <input
                autoComplete='false'
                name='hidden'
                style={{ display: 'none' }}
              />
              <input name='_redirect' type='hidden' value='#' />
              <div className='mt-4 space-y-2'>
                <div className='col-span-full'>
                  <UserAuthForm />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className='hidden bg-white lg:block lg:flex-1 relative sm:contents'>
          <div className='absolute inset-0 object-cover w-full h-full bg-white'>
            <Image
              className='object-center w-full h-auto bg-gray-200'
              src='https://d33wubrfki0l68.cloudfront.net/64c901dbc4b16388ef27646a320ad9c1441594df/236fd/images/placeholders/rectangle2.svg'
              alt='hero'
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
