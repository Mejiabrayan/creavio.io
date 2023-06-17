import { SignIn } from '@/components/SignIn';
import { buttonVariants } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <section className='relative h-screen '>
    <div className='absolute inset-0 '>
      <div className='h-full max-w-2xl mx-auto flex flex-col justify-center items-center gap-20'>
        <Link
          href='/'
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            'self-start -mt-20'
          )}
        >
   
        </Link>
        <SignIn />
      </div>
    </div>
  </section>
  );
};

export default page;
