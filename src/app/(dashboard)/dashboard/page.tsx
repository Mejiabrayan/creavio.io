import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { db } from '@/lib/db';
import ApiDashboard from '@/components/ApiDashboard';
import RequestApiKey from '@/components/RequestApiKey';
import UserDashboard from '@/components/UserDashboard';
// import RequestApiKey from '@/components/RequestApiKey';

export const metadata: Metadata = {
  title: 'Creavio.io | Dashboard',
  description: 'Dashboard for Creavio.io',
};

const page = async () => {
  const user = await getServerSession(authOptions);

  if (!user) return notFound();

  const apiKey = await db.apiKey.findFirst({
    where: { userId: user.user.id, enabled: true },
  });

  return (
    <div className='max-w-7xl mx-auto mt-16'>
      {apiKey ?
         // @ts-expect-error Server Component
       <ApiDashboard /> : <UserDashboard />}
    </div>
  );
};

export default page;
