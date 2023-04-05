import LargeHeading from '@/components/ui/LargeHeading';
import { FC } from 'react';

interface pageProps {
  params: {
    userid: string;
  };
}

export async function generateStaticParams() {
  const userId = ['1', '2', '3']; // fetch from database or API
  return userId.map((userid) => {
    return {
      userid,
    };
  });
}

export async function generateMetadata({
  params,
}: {
  params: { userid: string };
}) {
  return {
    title: `User: ${params.userid}`,
    description: `User: ${params.userid}`,
  };
}

const page: FC<pageProps> = ({ params }) => {
  return (
    <div className='relative min-h-screen flex flex-col items-center justify-center'>
      {' '}
      <LargeHeading>{params.userid}</LargeHeading>;
    </div>
  );
};

export default page;
