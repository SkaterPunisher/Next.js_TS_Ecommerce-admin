import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type RestaurantTitleProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  name: string;
};
