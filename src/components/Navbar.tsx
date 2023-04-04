import { getServerSession } from 'next-auth';
import Link from 'next/link';
import SignInButton from '@/components/SignInButton';
import SignOutButton from '@/components/SignOutButton';
import { buttonVariants } from '@/ui/Button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { authOptions } from '@/lib/auth';

const Navbar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className='fixed backdrop-blur-sm bg-white/75 dark:bg-slate-900/75 z-50 top-0 left-0 right-0 h-20 border-b border-slate-300 dark:border-slate-700 shadow-sm flex items-center justify-center'>
      <div className='container max-w-7xl mx-auto w-full flex justify-between items-center'>
        <div className='flex items-center'>
          <Link href='/' className='mr-3 font-bold'>
            Creavio
          </Link>
          <div className='md:hidden'>
            <ThemeToggle />
          </div>
        </div>
        <div className='hidden md:flex justify-center flex-1 gap-3'>
          <Link
            href='/'
            className={buttonVariants({ variant: 'ghost' })}
          >
            Home 
          </Link>
          <Link
            href='/blog'
            className={buttonVariants({ variant: 'ghost' })}
          >
            Blog
          </Link>
          {session ? (
            <>
              <Link
                className={buttonVariants({ variant: 'ghost' })}
                href='/dashboard'
              >
                Dashboard
              </Link>
              <SignOutButton />
            </>
          ) : (
            <SignInButton />
          )}
        </div>
        <div className='hidden md:block'>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
