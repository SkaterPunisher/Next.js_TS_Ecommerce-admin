import React from 'react';
import RestaurantSlugHeader from './components/RestaurantHeader/RestaurantHeader';

const RestaurantLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <RestaurantSlugHeader />
      <div className='flex m-auto w-2/3 justify-between items-start 0 -mt-11'>
        {children}
      </div>
    </main>
  );
};

export default RestaurantLayout;
