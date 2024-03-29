import { RestaurantTitleProps } from './RestaurantTitle.props';

const RestaurantTitle = ({name, ...props}: RestaurantTitleProps) => {
  return (
    <div className='mt-4 border-b pb-6' {...props}>
      <h1 className='font-bold text-6xl'>{name}</h1>
    </div>
  );
};

export default RestaurantTitle;
