import { ImageDefault } from '@/ui/ImageDefault/ImageDefault';
import Link from 'next/link';
import { SearchRestaurantCardProps } from './SearchRestaurantCard.props';
import Price from '@/ui/Price/Price';
import { renderRatingText } from '@/utils/renderRatingText';
import Stars from '@/ui/Stars/Stars';

const SearchRestaurantCard = ({
  restaurant,
  ...props
}: SearchRestaurantCardProps) => {
  return (
    <div className='border-b flex pb-5 ml-4' {...props}>
      <ImageDefault
        src={restaurant.main_image}
        alt=''
        width={200}
        height={200}
        className='w-44 rounded h-36'
      />
      <div className='pl-5'>
        <h2 className='text-3xl'>{restaurant.name}</h2>
        <div className='flex items-start'>
          <Stars reviews={restaurant.reviews} />
          <p className='ml-2 text-sm'>{renderRatingText(restaurant.reviews)}</p>
        </div>
        <div className='mb-9'>
          <div className='font-light flex text-reg'>
            <Price price={restaurant.price} />
            <p className='mr-4 capitalize'>{restaurant.cuisine.name}</p>
            <p className='mr-4 capitalize'>{restaurant.location.name}</p>
          </div>
        </div>
        <div className='text-red-600'>
          <Link href={`/restaurant/${restaurant.slug}`}>
            View more information
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchRestaurantCard;
