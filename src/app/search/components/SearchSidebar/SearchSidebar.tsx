import { PRICE } from '@prisma/client';
import Link from 'next/link';
import { SearchSidebarProps } from './SearchSidebar.props';
import uniqid from 'uniqid';

const SearchSidebar = ({
  location,
  cuisine,
  searchParams,
  ...props
}: SearchSidebarProps): JSX.Element => {
  const prices = [
    {
      price: PRICE.CHEAP,
      label: '$',
      className: 'border w-full text-center text-reg font-light rounded-l p-2',
    },
    {
      price: PRICE.REGULAR,
      label: '$$',
      className: 'border w-full text-center text-reg font-light p-2',
    },
    {
      price: PRICE.EXPENSIVE,
      label: '$$$',
      className: 'border w-full text-center text-reg font-light rounded-r p-2',
    },
  ];

  return (
    <div className='w-1/5' {...props}>
      <div className='border-b pb-4 flex flex-col'>
        <h1 className='mb-2'>Region</h1>
        {location.map((location) => {
          return (
            <Link
              href={{
                pathname: '/search',
                query: {
                  ...searchParams,
                  city: location.name,
                },
              }}
              className='font-light text-reg capitalize cursor-pointer'
              key={location.id}
            >
              {location.name}
            </Link>
          );
        })}
      </div>
      <div className='border-b pb-4 mt-3 flex flex-col'>
        <h1 className='mb-2'>Cuisine</h1>
        {cuisine.map((cuisine) => {
          return (
            <Link
              href={{
                pathname: '/search',
                query: {
                  ...searchParams,
                  cuisine: cuisine.name,
                },
              }}
              className='font-light text-reg capitalize cursor-pointer'
              key={cuisine.id}
            >
              {cuisine.name}
            </Link>
          );
        })}
      </div>
      <div className='mt-3 pb-4'>
        <h1 className='mb-2'>Price</h1>
        <div className='flex'>
          {prices.map((price) => {
            return (
              <Link
                key={uniqid()}
                href={{
                  pathname: '/search',
                  query: {
                    ...searchParams,
                    price: price.price,
                  },
                }}
                className={price.className}
              >
                {price.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchSidebar;
