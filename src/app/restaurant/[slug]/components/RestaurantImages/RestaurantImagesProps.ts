import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type RestaurantImagesProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  images: string[];
};
