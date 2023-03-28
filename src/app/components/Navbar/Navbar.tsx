import AuthModal from '@/ui/AuthModal/AuthModal';
import Logo from '@/ui/Logo/Logo';

const Navbar = () => {
  return (
    <nav className='bg-white p-2 flex justify-between'>
      <Logo />
      <div>
        <div className='flex'>
          <AuthModal isSignin={true}/>
          <AuthModal isSignin={false}/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
