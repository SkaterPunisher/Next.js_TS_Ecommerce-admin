import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type RestaurantDescriptionProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  description: string;
};
