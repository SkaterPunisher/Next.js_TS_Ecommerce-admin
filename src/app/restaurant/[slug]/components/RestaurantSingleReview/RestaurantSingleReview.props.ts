import { Review } from '@prisma/client';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type RestaurantSingleReviewProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  review: Review
};
