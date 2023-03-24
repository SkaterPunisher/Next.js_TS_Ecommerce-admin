import SearchHeader from './components/SearchHeader/SearchHeader';
import SearchSidebar from './components/SearchSidebar/SearchSidebar';
import SearchRestaurantCard from './components/SearchRestaurantCard/SearchRestaurantCard';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const fetchRestaurantsByCity = async (city: string | undefined) => {
  const select = {
    id: true,
    name: true,
    main_image: true,
    price: true,
    cuisine: true,
    location: true,
    slug: true,
  };
  if (!city) return prisma.restaurant.findMany({ select });
  return prisma.restaurant.findMany({
    where: {
      location: {
        name: {
          equals: city.toLowerCase(),
        },
      },
    },
    select,
  });
};

const Search = async ({ searchParams }: { searchParams: { city: string } }) => {
  const restaurants = await fetchRestaurantsByCity(searchParams.city);

  return (
    <>
      <SearchHeader />
      <div className='flex py-4 m-auto w-2/3 justify-between items-start'>
        <SearchSidebar />
        <div className='w-5/6'>
          {restaurants.length ? (
            restaurants.map((rest) => {
              return <SearchRestaurantCard restaurant={rest} key={rest.id} />;
            })
          ) : (
            <p>Sorry, we found no restaurants in this area</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Search;
