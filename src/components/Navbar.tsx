import React from 'react';
import { getAuthSession } from '@/lib/auth';
import Link from 'next/link';
import { buttonVariants } from './ui/Button';
import { UserAccountNav } from './UserAccountNav';

const Navbar = async () => {
  const session = await getAuthSession();
  return (
    <section className=' border-b border-white/5 overflow-hidden relative'>
      <div className='relative w-full mx-auto max-w-7xl'>
        <div className='relative flex flex-col w-full p-5 mx-auto lg:px-16 md:flex-row md:items-center md:justify-between md:px-6'>
          <div className='flex flex-row items-center justify-between text-sm text-gray-800 lg:justify-start'>
            <a href='/'>
              <div>
                <p className='font-semibold'>Creavio </p>
              </div>
            </a>
            <button className='inline-flex items-center justify-center p-2 text-white focus:outline-none focus:text-black hover:text-black md:hidden'>
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  className='inline-flex'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'
                ></path>
                <path
                  className='hidden'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'
                ></path>
              </svg>
            </button>
          </div>
          <nav className='flex-col items-center flex-grow hidden md:flex md:flex-row md:justify-end md:pb-0'>
            <a
              href='/'
              className='px-2 py-2 text-sm font-medium text-gray-800 hover:text-whgray0 lg:px-6 md:px-3 lg:ml-auto'
            >
              Home
            </a>
            <a
              href='#'
              className='px-2 py-2 text-sm font-medium text-gray-800 hover:text-whgray0 lg:px-6 md:px-3'
            >
              About
            </a>
            <a
              href='#'
              className='px-2 py-2 text-sm font-medium text-gray-800 hover:text-whgray0 lg:px-6 md:px-3'
            >
              Pricing
            </a>
            <div className='inline-flex items-center gap-2 list-none lg:ml-auto'>
              {session?.user ? (
                <UserAccountNav user={session.user} />
              ) : (
                <Link href='/sign-in' className={buttonVariants()}>
                  Sign In
                </Link>
              )}
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Navbar;


