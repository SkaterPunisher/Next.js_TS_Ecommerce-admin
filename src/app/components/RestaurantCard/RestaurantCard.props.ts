import { RestaurantCardType } from '@/app/page';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type RestaurantCardProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  restaurant: RestaurantCardType;
};
