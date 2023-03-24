import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type RestaurantNavbarProps = DetailedHTMLProps<
  HTMLAttributes<HTMLOptionElement>,
  HTMLOptionElement
> & {
  slug: string;
};
