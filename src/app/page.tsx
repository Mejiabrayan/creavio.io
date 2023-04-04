import LargeHeading from '@/components/ui/LargeHeading';
import Paragraph from '@/components/ui/Paragraph';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import TriangleObject from '@/components/TriangleObject';
import { buttonVariants } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'MyApp | Home',
  description: 'MyApp Home Page',
};

export default function Home() {
  return (
    <div className='relative h-screen flex items-center justify-center overflow-x-hidden'>
      <div className='container pt-32 max-w-7xl w-full mx-auto h-full'>
        <div className='h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start'>
          <LargeHeading
            size='lg'
            className='three-d text-black dark:text-light-gold text-center lg:text-left'
          >
            Welcome to <br />
            <span className='bg-gradient-to-tr from-pink-400 via-red-400 to-gray-500 text-transparent bg-clip-text text-6xl'>
              Creavio.io
            </span>
          </LargeHeading>

          <Paragraph className='max-w-xl lg:text-left'>
            Lunch your online brand with Creavio.io. An all in one platform for
            content creators, influencers, and entrepreneurs.{' '}
            <Link
              href='/login'
              className={buttonVariants({ variant: 'outline' })}
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
