import RestaurantDescription from './components/RestaurantDescription/RestaurantDescription';
import RestaurantImages from './components/RestaurantImages/RestaurantImages';
import RestaurantNavbar from './components/RestaurantNavbar/RestaurantNavbar';
import RestaurantRating from './components/RestaurantRating/RestaurantRating';
import RestaurantReservationCard from './components/RestaurantReservationCard/RestaurantReservationCard';
import RestaurantReview from './components/RestaurantReview/RestaurantReview';
import RestaurantTitle from './components/RestaurantTitle/RestaurantTitle';

const RestaurantDetails = () => {
  return (
    <>
      <div className='bg-white w-[70%] rounded p-3 shadow'>
        <RestaurantNavbar />
        <RestaurantTitle />
        <RestaurantRating />
        <RestaurantDescription />
        <RestaurantImages />
        <RestaurantReview />
      </div>
      <div className='w-[27%] relative text-reg'>
        <RestaurantReservationCard />
      </div>
    </>
  );
};

export default RestaurantDetails;
