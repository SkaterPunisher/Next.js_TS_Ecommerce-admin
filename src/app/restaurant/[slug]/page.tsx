import { PrismaClient, Review } from '@prisma/client';
import { notFound } from 'next/navigation';
import RestaurantDescription from './components/RestaurantDescription/RestaurantDescription';
import RestaurantImages from './components/RestaurantImages/RestaurantImages';
import RestaurantNavbar from './components/RestaurantNavbar/RestaurantNavbar';
import RestaurantRating from './components/RestaurantRating/RestaurantRating';
import RestaurantReservationCard from './components/RestaurantReservationCard/RestaurantReservationCard';
import RestaurantReviews from './components/RestaurantReviews/RestaurantReviews';
import RestaurantTitle from './components/RestaurantTitle/RestaurantTitle';

const prisma = new PrismaClient();

export type RestaurantDetailsType = {
  id: number;
  name: string;
  images: string[];
  description: string;
  slug: string;
  reviews: Review[];
  open_time: string,
  close_time: string,
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
      reviews: true,
      open_time: true,
      close_time: true,
    },
  });

  if (!restaurant) {
    notFound();
  }
  return restaurant;
};

const RestaurantDetails = async ({ params }: { params: { slug: string } }) => {
  const restaurant = await fetchRestaurantBySlug(params.slug);

  return (
    <>
      <div className='bg-white w-[70%] rounded p-3 shadow'>
        <RestaurantNavbar slug={restaurant.slug} />
        <RestaurantTitle name={restaurant.name} />
        <RestaurantRating reviews={restaurant.reviews} />
        <RestaurantDescription description={restaurant.description} />
        <RestaurantImages images={restaurant.images} />
        <RestaurantReviews reviews={restaurant.reviews} />
      </div>
      <div className='w-[27%] relative text-reg'>
        <RestaurantReservationCard openTime={restaurant.open_time} closeTime={restaurant.close_time}/>
      </div>
    </>
  );
};

export default RestaurantDetails;
