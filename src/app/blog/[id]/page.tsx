import LargeHeading from '@/components/ui/LargeHeading';

export async function generateMetadata({ params }: { params: { id: string } }) {
  return {
    title: `Blog Post: ${params.id}`,
    description: `Blog Post: ${params.id}`,
  };
}

export default function Blog({ params }: { params: { id: string } }) {
  return (
    <div className='relative min-h-screen flex flex-col items-center justify-center'>
      <LargeHeading className='text-gray-500'>
        Blog Post: {params.id}
      </LargeHeading>
      
    </div>
  );
}
