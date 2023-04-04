import { Review } from '@prisma/client';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type StarsProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  reviews: Review[];
  rating?: number;
};
