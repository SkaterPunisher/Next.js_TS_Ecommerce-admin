import { Review } from '@prisma/client';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type RestaurantReviewsProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  reviews: Review[]
};
