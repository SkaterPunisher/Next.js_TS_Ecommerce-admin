import { Reviews } from '@prisma/client';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type RestaurantRatingProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  reviews: Reviews[]
};
