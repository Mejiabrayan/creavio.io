import Link from 'next/link';
import { buttonVariants } from '@/ui/Button';

const Footer = () => {
  return (
    <div className='bg-white/75 dark:bg-slate-900/75 border-t border-slate-300 dark:border-slate-700 fixed bottom-0 w-full'>
      <div className='container max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center'>
        <div className='text-sm text-gray-500 dark:text-gray-400'>
          &copy; {new Date().getFullYear()} Creavio. All rights reserved.
        </div>
        <div className='hidden md:flex gap-3'>
          <Link
            href='/privacy-policy'
            className={buttonVariants({ variant: 'ghost' })}
          >
            Privacy Policy
          </Link>
          <Link
            href='/terms-of-service'
            className={buttonVariants({ variant: 'ghost' })}
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
