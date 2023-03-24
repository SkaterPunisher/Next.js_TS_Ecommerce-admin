import { ImageDefault } from '@/ui/ImageDefault/ImageDefault';
import { RestaurantImagesProps } from './RestaurantImagesProps';

const RestaurantImages = ({ images, ...props }: RestaurantImagesProps) => {
  return (
    <div {...props}>
      <h1 className='font-bold text-3xl mt-10 mb-7 border-b pb-5'>
        {images.length} photo{images.length > 1 ? 's' : ''}{' '}
      </h1>
      <div className='flex flex-wrap'>
        {images.map((img) => {
          return (
            <ImageDefault
              key={img}
              src={img}
              alt=''
              width={200}
              height={200}
              className='w-56 h-44 mr-1 mb-1'
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantImages;
