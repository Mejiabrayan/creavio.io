import LargeHeading from '@/components/ui/LargeHeading';
import Paragraph from '@/components/ui/Paragraph';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import TriangleObject from '@/components/TriangleObject';
import { buttonVariants } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Creavio.io | Home',
  description: 'Creavio.io Home Page',
};

export default function Home() {
  return (
    <div className='relative min-h-screen flex items-center justify-center overflow-x-hidden bg-gradient-to-br from-gray-50 to-gray-100'>
      <div className='container pt-32 max-w-7xl w-full mx-auto h-full'>
        <div className='h-full gap-6 flex flex-col justify-center items-center lg:items-start'>
          <LargeHeading
            size='lg'
            className='three-d text-black dark:text-light-gold text-center lg:text-left leading-none font-extrabold tracking-tight'
          >
            Welcome to <br />
            <span className='bg-gradient-to-tr from-pink-400 via-red-400 to-gray-500 text-transparent bg-clip-text text-6xl'>
              Creavio.io
            </span>
          </LargeHeading>

          <Paragraph className='max-w-lg lg:max-w-xl lg:text-left text-center text-gray-600'>
            Launch your online brand with Creavio.io. An all-in-one platform for
            content creators, influencers, and entrepreneurs.{' '}
            <Link
              href='/login'
              className={buttonVariants({ variant: 'outline', size: 'sm' })}
            >
              Sign up
            </Link>
            .
          </Paragraph>

          <div className='relative w-full max-w-xl lg:max-w-3xl lg:left-1/2 aspect-square lg:absolute'>
            <TriangleObject />
          </div>
        </div>
      </div>
    </div>
  );
}
