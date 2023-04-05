import LargeHeading from '@/components/ui/LargeHeading';
import Paragraph from '@/components/ui/Paragraph';
import type { Metadata } from 'next';
import Image from 'next/image';
import TriangleObject from '@/components/TriangleObject';

export const metadata: Metadata = {
  title: 'Creavio | About',
  description: 'Creavio About Page',
};

export default function About() {
  return (
    <div className='relative h-screen  flex items-center justify-center overflow-x-hidden'>
      <div className='container pt-32 max-w-7xl w-full mx-auto h-full'>
        <div className='h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start'>
          <LargeHeading
            size='lg'
            className='three-d text-black dark:text-light-gold text-center lg:text-left bg-gradient-to-tr from-pink-400 via-red-400 to-gray-500 text-transparent bg-clip-text'
          >
            About Creavio.io
          </LargeHeading>

          <Paragraph className='max-w-xl lg:text-left'>
            Creavio.io is an all-in-one platform designed for content creators,
            influencers, and entrepreneurs to launch and grow their online
            brands. We offer a range of tools and services, including website
            building, social media management, e-commerce solutions, and more.
          </Paragraph>
          <Paragraph className='max-w-xl lg:text-left'>
            Our mission is to empower individuals and businesses to create and
            share their unique stories with the world, and to provide the
            resources and support they need to succeed. Whether you`&apos;`re
            just starting out or looking to take your brand to the next level,
            Creavio.io has everything you need to make your mark online.
          </Paragraph>
          <div className='relative w-full max-w-xl lg:max-w-3xl lg:left-1/2 aspect-square lg:absolute'>
            <TriangleObject />
          </div>
        </div>
      </div>
    </div>
  );
}
