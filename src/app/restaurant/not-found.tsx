'use client';

import ErrorIcon from '@/public/icons/error.png';
import { ImageDefault } from '@/ui/ImageDefault/ImageDefault';

const Error = ({error}: {error: Error}) => {
  return (
    <div className='h-screen bg-gray-200 flex flex-col justify-center items-center'>
      <ImageDefault src={ErrorIcon} alt='error' width={200} height={200} />
      <div className='bg-white px-9 py-14 shadow rounded mt-10'>
        <h3 className='text-3xl font-bold'>Well, this is embarrassing </h3>
        <p className='text-reg font-bold'>We cannot find that restaurant</p>
        <p className='mt-6 text-sm font-light'>Error Code: 400</p>
      </div>
    </div>
  );
};

export default Error;
