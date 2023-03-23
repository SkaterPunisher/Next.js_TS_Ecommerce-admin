import SearchHeader from './components/SearchHeader/SearchHeader';
import SearchSidebar from './components/SearchSidebar/SearchSidebar';
import SearchRestaurantCard from './components/SearchRestaurantCard/SearchRestaurantCard';

const Search = () => {
  return (
    <>
      <SearchHeader />
      <div className='flex py-4 m-auto w-2/3 justify-between items-start'>
        <SearchSidebar />
        <div className='w-5/6'>
          <SearchRestaurantCard />
        </div>
      </div>
    </>
  );
};

export default Search;
