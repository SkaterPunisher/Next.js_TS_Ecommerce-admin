import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type RestaurantReservationCardProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  openTime: string;
  closeTime: string;
};
