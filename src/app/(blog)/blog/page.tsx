import { FC } from 'react';

interface BlogProps {}

const blog: FC<BlogProps> = ({}) => {
  return (
    <div className=' text-gray-600 flex flex-col max-w-2xl mx-auto p-4 space-y-4 items-center justify-center'>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-4xl font-bold'>Blog</h1>
        <p className='text-xl'>This is the blog page.</p>
      </div>

      <div className='flex flex-col items-center justify-center'>
        <h2 className='text-2xl font-bold'>Blog Post 1</h2>
        <p className='text-xl'>This is the first blog post.</p>
      </div>
    </div>
  );
};

export default blog;
