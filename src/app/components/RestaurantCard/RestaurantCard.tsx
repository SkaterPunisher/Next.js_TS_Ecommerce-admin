import { ImageDefault } from '@/ui/ImageDefault/ImageDefault';
import Price from '@/ui/Price/Price';
import Link from 'next/link';
import { RestaurantCardProps } from './RestaurantCard.props';

const RestaurantCard = ({
  restaurant,
  ...props
}: RestaurantCardProps): JSX.Element => {
  return (
    <div
      className='w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer'
      {...props}
    >
      <Link href={`/restaurant/${restaurant.slug}`}>
        <ImageDefault
          src={restaurant.main_image}
          alt=''
          width={200}
          height={200}
          className='w-full h-36'
        />
        <div className='p-1'>
          <h3 className='font-bold text-2xl mb-2'>{restaurant.name}</h3>
          <div className='flex items-start'>
            <div className='flex mb-2'>*****</div>
            <p className='ml-2'>
              {restaurant.reviews.length} review
              {restaurant.reviews.length === 1 ? 's' : ''}
            </p>
          </div>
          <div className='flex text-reg font-light capitalize'>
            <p className=' mr-3'>{restaurant.cuisine.name}</p>
            <Price price={restaurant.price} />
            <p>{restaurant.location.name}</p>
          </div>
          <p className='text-sm mt-1 font-bold'>Booked 3 times today</p>
        </div>
      </Link>
    </div>
  );
};

export default RestaurantCard;
