import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type RestaurantHeaderProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  name: string;
};
