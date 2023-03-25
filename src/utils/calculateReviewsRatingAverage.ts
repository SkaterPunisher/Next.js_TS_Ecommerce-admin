import { Reviews } from '@prisma/client';

export const calculateReviewsRatingAverage = (reviews: Reviews[]) => {
  if (!reviews.length) return 0;

  return (
    reviews.reduce((sum, reviews) => {
      return sum + reviews.rating;
    }, 0) / reviews.length
  );
};

