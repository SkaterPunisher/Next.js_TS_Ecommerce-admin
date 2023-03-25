import RestaurantSingleReview from '../RestaurantSingleReview/RestaurantSingleReview';
import { RestaurantReviewsProps } from './RestaurantReviews.props';

const RestaurantReviews = ({ reviews, ...props }: RestaurantReviewsProps) => {
  return (
    <div {...props}>
      <h1 className='font-bold text-3xl mt-10 mb-7 borber-b pb-5'>
        What {reviews.length} {reviews.length === 1 ? 'person' : 'people'} are
        saying
      </h1>
      <div>
        {reviews.map((review) => {
          return (
            <RestaurantSingleReview review={review} key={review.id}/>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantReviews;
