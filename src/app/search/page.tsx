import SearchHeader from './components/SearchHeader/SearchHeader';
import SearchSidebar from './components/SearchSidebar/SearchSidebar';
import SearchRestaurantCard from './components/SearchRestaurantCard/SearchRestaurantCard';
import { PRICE, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type SearchParams = {
  city?: string;
  cuisine?: string;
  price?: PRICE;
};

const fetchRestaurantsByCity = async (searchParams: SearchParams) => {
  const where: any = {};

  if (searchParams.city) {
    const location = {
      name: {
        equals: searchParams.city.toLowerCase(),
      },
    };
    where.location = location;
  }
  if (searchParams.cuisine) {
    const cuisine = {
      name: {
        equals: searchParams.cuisine.toLowerCase(),
      },
    };
    where.cuisine = cuisine;
  }
  if (searchParams.price) {
    const price = {
      equals: searchParams.price,
    };
    where.price = price;
  }

  const select = {
    id: true,
    name: true,
    main_image: true,
    price: true,
    cuisine: true,
    location: true,
    slug: true,
    reviews: true
  };

  return prisma.restaurant.findMany({
    where,
    select,
  });
};

const fetchLocations = async () => {
  return prisma.location.findMany();
};

const fetchCuisines = async () => {
  return prisma.cuisine.findMany();
};

const Search = async ({ searchParams }: { searchParams: SearchParams }) => {
  const restaurant = await fetchRestaurantsByCity(searchParams);
  const location = await fetchLocations();
  const cuisine = await fetchCuisines();

  return (
    <>
      <SearchHeader />
      <div className='flex py-4 m-auto w-2/3 justify-between items-start'>
        <SearchSidebar
          location={location}
          cuisine={cuisine}
          searchParams={searchParams}
        />
        <div className='w-5/6'>
          {restaurant.length ? (
            restaurant.map((rest) => {
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
