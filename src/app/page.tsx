import LargeHeading from '@/components/ui/LargeHeading';
import Paragraph from '@/components/ui/Paragraph';
import type { Metadata } from 'next';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/Button';
import FeaturedSection from '@/components/FeaturedSection';
import { TechBanner } from '@/components/TechBanner';
import HeroSection from '@/components/HeroSection';

export const metadata: Metadata = {
  title: 'Creavio.io | Home',
  description: 'Creavio.io Home Page',
};

export default function IndexPage() {
  return (
    <section>
      <HeroSection />
      {/* Tech Banner goes here */}
      {/* <TechBanner /> */}
      <FeaturedSection />
    </section>
  );
}
