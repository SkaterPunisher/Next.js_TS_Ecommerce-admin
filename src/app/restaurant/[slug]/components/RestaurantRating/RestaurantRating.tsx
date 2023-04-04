import Stars from '@/ui/Stars/Stars';
import { calculateReviewsRatingAverage } from '@/utils/calculateReviewsRatingAverage';
import { RestaurantRatingProps } from './RestaurantRating.props';

const RestaurantRating = ({ reviews }: RestaurantRatingProps) => {
  return (
    <div className='flex items-end'>
      <div className='ratings mt-2 flex items-center'>
        <Stars reviews={reviews} />
        <p className='text-reg ml-3'>
          {calculateReviewsRatingAverage(reviews).toFixed(1)}
        </p>
      </div>
      <div>
        <p className='text-reg ml-4'>
          {reviews.length} Review{reviews.length > 1 ? 's' : ''}
        </p>
      </div>
    </div>
  );
};

export default RestaurantRating;
