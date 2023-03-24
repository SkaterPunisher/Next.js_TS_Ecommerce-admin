import { PrismaClient } from '@prisma/client';
import RestaurantMenu from '../components/RestaurantMenu/RestaurantMenu';
import RestaurantNavbar from '../components/RestaurantNavbar/RestaurantNavbar';

const prisma = new PrismaClient();

const fetchRestaurantMenu = async (slug: string) => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      item: true,
    },
  });

  if (!restaurant) {
    throw new Error();
  }

  return restaurant.item;
};

const RestaurantMenuPage = async ({ params }: { params: { slug: string } }) => {
  const menu = await fetchRestaurantMenu(params.slug);

  return (
    <div className='bg-white w-[100%] rounded p-3 shadow'>
      <RestaurantNavbar slug={params.slug} />
      <RestaurantMenu menu={menu}/>
    </div>
  );
};

export default RestaurantMenuPage;
