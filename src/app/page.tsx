'use client';

import Header from '@/app/components/Header/Header';
import RestaurantCard from '@/app/components/RestaurantCard/RestaurantCard';

export default function Home() {
  return (
    <main>
      <Header />
      <div className='py-3 px-36 mt-10 flex flex-wrap justify-center'>
        <RestaurantCard />
      </div>
    </main>
  );
}

// HlCUMFg4UadUwlEw