import { PrismaClient } from '@prisma/client';
import RestaurantDescription from './components/RestaurantDescription/RestaurantDescription';
import RestaurantImages from './components/RestaurantImages/RestaurantImages';
import RestaurantNavbar from './components/RestaurantNavbar/RestaurantNavbar';
import RestaurantRating from './components/RestaurantRating/RestaurantRating';
import RestaurantReservationCard from './components/RestaurantReservationCard/RestaurantReservationCard';
import RestaurantReview from './components/RestaurantReview/RestaurantReview';
import RestaurantTitle from './components/RestaurantTitle/RestaurantTitle';

const prisma = new PrismaClient();

export type RestaurantDetailsType = {
  id: number;
  name: string;
  images: string[];
  description: string;
  slug: string;
};

const fetchRestaurantBySlug = async (
  slug: string
): Promise<RestaurantDetailsType> => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      id: true,
      name: true,
      images: true,
      description: true,
      slug: true,
    },
  });

  if (!restaurant) {
    throw new Error();
  }
  return restaurant;
};

const RestaurantDetails = async ({ params }: { params: { slug: string } }) => {
  const restaurant = await fetchRestaurantBySlug(params.slug);

  return (
    <>
      <div className='bg-white w-[70%] rounded p-3 shadow'>
        <RestaurantNavbar slug={restaurant.slug}/>
        <RestaurantTitle name={restaurant.name}/>
        <RestaurantRating />
        <RestaurantDescription description={restaurant.description}/>
        <RestaurantImages images={restaurant.images}/>
        <RestaurantReview />
      </div>
      <div className='w-[27%] relative text-reg'>
        <RestaurantReservationCard />
      </div>
    </>
  );
};

export default RestaurantDetails;
