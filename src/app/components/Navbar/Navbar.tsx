import Logo from '@/ui/Logo/Logo';

const Navbar = () => {
  return (
    <nav className='bg-white p-2 flex justify-between'>
      <Logo />
      <div>
        <div className='flex'>
          <button className='bg-blue-400 text-white border p-1 px-4 rounded mr-3'>
            Sign in
          </button>
          <button className='border p-1 px-4 rounded'>Sign up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
