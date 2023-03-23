import RestaurantMenuCard from '../components/RestaurantMenuCard/RestaurantMenuCard';
import RestaurantNavbar from '../components/RestaurantNavbar/RestaurantNavbar';

const RestaurantMenu = () => {
  return (
    <div className='bg-white w-[100%] rounded p-3 shadow'>
      <RestaurantNavbar />
      <RestaurantMenuCard />
    </div>
  );
};

export default RestaurantMenu;
