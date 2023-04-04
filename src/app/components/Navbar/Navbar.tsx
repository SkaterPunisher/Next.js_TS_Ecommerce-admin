'use client';

import { AuthenticationContext } from '@/app/context/AuthContext';
import useAuth from '@/hooks/useAuth';
import AuthModal from '@/ui/AuthModal/AuthModal';
import Logo from '@/ui/Logo/Logo';
import { useContext } from 'react';

const Navbar = () => {
  const { data, loading } = useContext(AuthenticationContext);
  const { signout } = useAuth();

  return (
    <nav className='bg-white p-2 flex justify-between'>
      <Logo />
      <div>
        {loading ? null : (
          <div className='flex'>
            {data ? (
              <button
                onClick={signout}
                className='bg-blue-400 text-white border p-1 px-4 rounded mr-3'
              >
                Sign out
              </button>
            ) : (
              <>
                <AuthModal isSignin={true} />
                <AuthModal isSignin={false} />
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
