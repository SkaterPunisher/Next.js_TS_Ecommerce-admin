
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type Inputs = {
  firstName: string,
  lastName: string
  email: string
  phone: string
  city: string
  password: string
}

export type AuthModalInputsProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  inputs: Inputs
  handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void
  isSignin: boolean
};
