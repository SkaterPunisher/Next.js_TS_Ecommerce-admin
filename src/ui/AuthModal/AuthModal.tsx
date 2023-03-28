'use client';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { FormEvent, useState } from 'react';
import AuthModalInputs from '../AuthModalInputs/AuthModalInputs';
import { Inputs } from '../AuthModalInputs/AuthModalInputs.props';
import { LoginModalProps } from './AuthModal.props';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function AuthModal({ isSignin, ...props }: LoginModalProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const [inputs, setInputs] = useState<Inputs>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    password: '',
  });

  return (
    <div {...props}>
      <button
        onClick={handleOpen}
        className={
          isSignin
            ? 'bg-blue-400 text-white border p-1 px-4 rounded mr-3'
            : 'border p-1 px-4 rounded'
        }
      >
        {isSignin ? 'Sign in' : 'Sign up'}
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <div className='p-2 h-[500px]'>
            <div className='uppercase font-bold text-center pb-2 border-b mb-2'>
              <p className='text-sm'>
                {isSignin ? 'Sign in' : 'Create Account'}
              </p>
            </div>
            <div className='m-auto'>
              <h2 className='text-2xl font-light text-center'>
                {isSignin
                  ? 'Log Into Your Account'
                  : 'Create Your BooksTable Account'}
              </h2>
              <AuthModalInputs inputs={inputs} handleChangeInput={handleChangeInput} isSignin={isSignin}/>
              <button className='uppercase bg-red-600 w-full text-white p-3 rounded text-sm mb-5 disabled:bg-gray-400 '>
                {isSignin ? 'Sign In' : 'Create Account'}
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
