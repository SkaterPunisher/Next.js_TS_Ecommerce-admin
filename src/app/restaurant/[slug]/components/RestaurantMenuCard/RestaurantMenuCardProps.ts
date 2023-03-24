import { Item } from '@prisma/client';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type RestaurantMenuCardProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  item: Item;
};
