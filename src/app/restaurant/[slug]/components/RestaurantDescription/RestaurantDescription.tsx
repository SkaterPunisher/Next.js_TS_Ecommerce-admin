import { RestaurantDescriptionProps } from './RestaurantDescription.props';

const RestaurantDescription = ({ description, ...props }: RestaurantDescriptionProps) => {
  return (
    <div className='mt-4' {...props}>
      <p className='text-lg font-light'>{description}</p>
    </div>
  );
};

export default RestaurantDescription;
