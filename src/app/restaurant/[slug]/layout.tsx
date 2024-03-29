
import RestaurantSlugHeader from './components/RestaurantHeader/RestaurantHeader';


const RestaurantLayout = ({
  children,
  params
}: {
  children: React.ReactNode;
  params: { slug: string };
}) => {
  return (
    <main>
      <RestaurantSlugHeader name={params.slug}/>
      <div className='flex m-auto w-[85%] justify-between items-start 0 -mt-11'>
        {children}
      </div>
    </main>
  );
};

export default RestaurantLayout;
