import { Cuisine, Location, PRICE } from '@prisma/client';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type SearchSidebarProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  location: Location[];
  cuisine: Cuisine[];
  searchParams: {
    city?: string | undefined;
    cuisine?: string | undefined;
    price?: PRICE | undefined;
  };
};
