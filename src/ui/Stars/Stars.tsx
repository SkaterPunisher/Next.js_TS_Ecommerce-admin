import FullStarIcon from '@/public/icons/full-star.png';
import HalfStarIcon from '@/public/icons/half-star.png';
import EmptyStarIcon from '@/public/icons/empty-star.png';
import { ImageDefault } from '@/ui/ImageDefault/ImageDefault';
import { StarsProps } from './Stars.props';
import { calculateReviewsRatingAverage } from '@/utils/calculateReviewsRatingAverage';
import uniqid from 'uniqid';

const Stars = ({ reviews, rating }: StarsProps) => {
  const reviewRating = rating || calculateReviewsRatingAverage(reviews);

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      const difference = parseFloat((reviewRating - i).toFixed(1));
      if (difference >= 1) stars.push(FullStarIcon);
      else if (difference < 1 && difference > 0) {
        if (difference <= 0.2) stars.push(EmptyStarIcon);
        else if (difference > 0.2 && difference <= 0.6)
          stars.push(HalfStarIcon);
        else stars.push(FullStarIcon);
      } else stars.push(EmptyStarIcon);
    }

    return stars.map((star) => {
      return (
        <ImageDefault
          key={uniqid()}
          src={star}
          alt=''
          width={100}
          height={100}
          className='w-4 h-4 mr-1 '
        />
      );
    });
  };

  return <div className='flex items-center'>{renderStars()}</div>;
};

export default Stars;
