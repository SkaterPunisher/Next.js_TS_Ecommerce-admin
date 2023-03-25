import RestaurantMenuCard from '../RestaurantMenuCard/RestaurantMenuCard';
import { RestaurantMenuProps } from './RestaurantMenu.props';

const RestaurantMenu = ({ menu, ...props }: RestaurantMenuProps) => {
  return (
    <main className='bg-white mt-5' {...props}>
      <div>
        <div className='mt-4 pb-1 mb-1'>
          <h1 className='font-bold text-4xl'>Menu</h1>
        </div>
        {menu.length ? (
          <div className='flex flex-wrap justify-between'>
            {menu.map((item) => {
              return <RestaurantMenuCard item={item} key={item.id} />;
            })}
          </div>
        ) : (
          <div className='flex flex-wrap justify-between'>
            <p>This restaurant does not have a menu</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default RestaurantMenu;
