import Link from 'next/link';
import React from 'react';
import { buttonVariants } from './ui/Button';
import LargeHeading from './ui/LargeHeading';
import Paragraph from './ui/Paragraph';

const HeroSection = () => {
  return (
    <>
      <section className='items-center justify-center flex h-screen'>
        <div className='relative items-center w-full px-5 py-8  mx-auto lg:px-16 max-w-7xl md:px-12'>
          <div className='w-full mx-auto text-center'>
            <div>
              <LargeHeading
                size='lg'
                className='text-center leading-tight pb-4 text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-gray-800/80 to-gray-900/80'
              >
                Unlock the{' '}
                <span className='relative'>
                  <span className='-z-10 bg-gray-700 absolute top-0 left-0 h-full w-full animate-highlight'></span>
                  <span className='text-white px-2 animate-delay-2s'>Power</span>
                </span>{' '}
                of AI for Creative Content Creation{' '}
              </LargeHeading>
              <Paragraph className='max-w-lg lg:max-w-xl mx-auto text-gray-600 mt-6'>
                Launch your online brand with Creavio.io. An all-in-one platform
                for content creators, influencers, and entrepreneurs to help
                expedite their creative process.
              </Paragraph>
            </div>
            <div className='flex flex-col justify-center max-w-sm gap-3 mx-auto mt-10 sm:flex-row'>
            <Link href='/sign-in' className={buttonVariants({ variant: "outline" })}>Sign up now</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
