import RestuarantCard from "./Restaurant";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";

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

  useEffect(() => {
    async function getRestaurants() {
      try {
        const data = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999"
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
  }, []); // ✅ empty dependency array so this runs ONCE

  // show shimmer only while loading
  if (isLoading) return <Shimmer />;

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, restuarants);
            setFilteredRes(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="restuarant-list">
        {filteredRes.length === 0 ? (
          <h2>No Restaurants Found</h2>
        ) : (
          filteredRes.map((restuarant, idx) => (
            <RestuarantCard restuarant={restuarant.info} key={idx} />
          ))
        )}
      </div>
    </>
  );
};

export default BodyComponent;
