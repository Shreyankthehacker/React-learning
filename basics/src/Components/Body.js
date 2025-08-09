import RestuarantCard from "./Restaurant";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router";
import { RESTUARANT_API_URL } from "./constant.js";
import useOnline from "../utils/useOnline.js";
import RestaurantCard, { withPromotedLabel } from "./Restaurant";


function filterData(searchText, restuarants) {
  return restuarants.filter((restuarant) =>
    restuarant?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
}

const BodyComponent = () => {
  const [searchText, setSearchText] = useState("Biryani");
  const [restuarants, setRestuarant] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // track shimmer state
  const [online] = useOnline();
  const PromotedRestuarant = withPromotedLabel(RestaurantCard)

  useEffect(() => {
    async function getRestaurants() {
      try {
        const data = await fetch(
          RESTUARANT_API_URL
        );
        const jsonData = await data.json();

        let allRestaurants = [];

        for (let i = 0; i < jsonData?.data?.cards?.length; i++) {
          const resData =
            jsonData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
          if (resData !== undefined) {
            allRestaurants.push(...resData);
          }
        }

        setRestuarant(allRestaurants);
        setFilteredRes(allRestaurants);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch restaurant data:", error);
        setIsLoading(false);
      }
    }

    getRestaurants(); // fetch once on mount
    return ()=>{
      console.log("this is used in fun programing instead of the DIDUNMOUNT in class based rendering ")
    }
  }, []); 

  
  if(!online){
    return <h1>OOPS You are offline </h1>
  }
  // show shimmer only while loading
  if (isLoading) return <Shimmer />;




  return (
    <>
    <div className="items-center px-150">
    <div className=" w-200 py-5">
  <div className="relative flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute w-5 h-5 top-2.5 left-2.5 text-slate-600">
      <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
    </svg>
 
    <input
    className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-10 pr-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
   type="text"
    placeholder="search"
    value={searchText}
    onChange={(e) => {
      setSearchText(e.target.value);
    }}
    />
    
    <button
      className=" w-30 rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
      type="button"
      onClick={()=>{
        const data = filterData(searchText,restuarants)
        setFilteredRes(data)
      }}
    >
      Search
    </button> 
  </div>
  </div>
</div>

<div className="flex flex-wrap justify-around items-start gap-4">
  {filteredRes.length === 0 ? (
    <h2>No Restaurants Found</h2>
  ) : (
    filteredRes.map((restaurant, idx) => (
      <Link to={`/restaurant/${restaurant.info.id}`} key={idx}>
        {restaurant.info.avgRating>4.5
          ? <PromotedRestuarant restaurant={restaurant.info} />
          : <RestaurantCard restaurant={restaurant.info} />}
      </Link>
    ))
  )}
</div>


    </>
  );
};

export default BodyComponent;
