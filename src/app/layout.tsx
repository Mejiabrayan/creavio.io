import { Suspense } from 'react';
import Navbar from '@/components/Navbar';
import { Toaster } from '@/components/ui/toast';
import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import Providers from '@/components/Providers';
import { cn } from '@/lib/utils';
import Loading from './loading';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className={cn('bg-white text-slate-900 antialiased', inter.className)}
    >
      <body className='relative min-h-screen bg-slate-50 dark:bg-slate-5000 antialiased'>
        <Providers>
          <Suspense fallback={<Loading />}>
            {/* @ts-expect-error Server Component */}
            <Navbar />
            <Toaster position='bottom-right' />
            <main>{children}</main>
          </Suspense>
          <Footer />
        </Providers>
        {/* Allow more height for mobile menu on mobile */}
        <div className='h-40 md:hidden' />
      </body>
    </html>
  );
}
