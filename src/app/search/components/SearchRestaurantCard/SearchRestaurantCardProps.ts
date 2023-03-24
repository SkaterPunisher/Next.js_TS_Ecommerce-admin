import { Cuisine, Location, PRICE } from '@prisma/client';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type SearchRestaurantCardProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  restaurant: {
    slug: string;
    id: number;
    location: Location;
    name: string;
    main_image: string;
    price: PRICE;
    cuisine: Cuisine;
  };
};
