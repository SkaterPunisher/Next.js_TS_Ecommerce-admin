
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type LoginModalProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  isSignin: boolean;
};
