import { renderTitle } from '@/utils/renderTitle';
import { RestaurantHeaderProps } from './RestaurantHeader.props';

const RestaurantHeader = ({ name, ...props }: RestaurantHeaderProps) => {
  return (
    <div className='h-96 overflow-hidden' {...props}>
      <div className='bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] h-full flex justify-center items-center'>
        <h1 className='text-7xl text-white capitalize text-shadow text-center'>
          {renderTitle(name)}
        </h1>
      </div>
    </div>
  );
};

export default RestaurantHeader;
