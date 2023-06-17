import { Suspense } from 'react';
import Navbar from '@/components/Navbar';
import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import Loading from './loading';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/Toaster';

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
      <body className='relative min-h-screen antialiased'>
        <Suspense fallback={<Loading />}>
          {/* <IslandBar /> */}

          <div className='absolute inset-0 bg-[url(/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]' />

          <main>
            {/* @ts-expect-error */}
            <Navbar />
            {children}
            <Footer />
          </main>
        </Suspense>
        <Toaster />
      </body>
    </html>
  );
}
