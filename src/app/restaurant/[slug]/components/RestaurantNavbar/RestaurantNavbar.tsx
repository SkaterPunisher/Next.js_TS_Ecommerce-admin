import Link from 'next/link';
import { RestaurantNavbarProps } from './RestaurantNavbarProps';

const RestaurantNavbar = ({slug, ...props}: RestaurantNavbarProps) => {
  return (
    <nav className='flex text-reg border-b pb-2' {...props}>
      <Link href={`/restaurant/${slug}`} className='mr-7'>
        Overview
      </Link>
      <Link href={`/restaurant/${slug}/menu`} className='mr-7'>
        Menu
      </Link>
    </nav>
  );
};

export default RestaurantNavbar;
